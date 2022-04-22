import { Injectable } from "@angular/core";
import { Cell, Row, Workbook, Worksheet } from 'exceljs';
import * as fs from 'file-saver';

@Injectable({ providedIn: 'root', })

export class ExcelService {
    constructor() { }

    async generateInterventionExcelFileAsync(dateRange: any, agents: Array<any>, intervetions: any, summaryWorkBook?: Workbook) {
        try {
            const workbook = !!summaryWorkBook ? summaryWorkBook : new Workbook();
            const worksheet = this._setWorksheetConfiguration(workbook, 'intervencie');

            const range = this._getDateRange(dateRange);
            const data: any = this._generateInterventionsData(range, agents, intervetions);

            worksheet.columns = [
                { header: 'Mesiac zberu informácií', key: 'dateRange', width: 10.35 },
                { header: 'Meno koordinátora', key: 'nameCoordinator', width: 10.35 },
                { header: 'Meno APZ', key: 'nameAssitant', width: 10.35 },
                { header: 'Lokalita', key: 'location', width: 10.35 },

                { header: 'Zápis', key: 'createdAt', width: 8.45 },
                { header: 'Dátum', key: 'date', width: 8.45 },

                { header: 'A1: Preventívna prehliadka', key: 'a1', width: 9.91 },
                { header: 'A2: Očkovanie', key: 'a2', width: 8.36 },
                { header: 'A3: Materská poradnňa', key: 'a3', width: 7.55 },
                { header: 'A4: OčkovanieCOVID-19', key: 'a4', width: 8.36 },
                { header: 'B1: Všeobecný pre dospelých', key: 'b1', width: 10.36 },
                { header: 'B2: Pediater', key: 'b2', width: 6.82 },
                { header: 'B3: Nemocnica', key: 'b3', width: 8.82 },
                { header: 'B4: Odborný lekár', key: 'b4', width: 7.36 },
                { header: 'C1: TSP', key: 'c1', width: 6.82 },
                { header: 'C2: OU/MS', key: 'c2', width: 6 },
                { header: 'C3: RPZ, 112', key: 'c3', width: 7.91 },
                { header: 'C4: Škola', key: 'c4', width: 5.36 },
                { header: 'C5: ÚPSVaR', key: 'c5', width: 6.45 },
                { header: 'D1: Meranie krvného tlaku', key: 'd1', width: 6.91 },
                { header: 'D2: Prvá pomoc ošetrenie poranení ', key: 'd2', width: 9.36 },
                { header: 'D3: Sprevádzanie na vyšetrenie', key: 'd3', width: 10.27 },
                { header: 'D4: Zdravotné poistenie', key: 'd4', width: 8 },
                { header: 'D5: Kompenzačné pomôcky a ZŤP', key: 'd5', width: 11.73 },
                { header: 'D6: Lieky', key: 'd6', width: 5.82 },
                { header: 'D7: RUVZ-Lekár v prípade epidémie', key: 'd7', width: 7.82 },
                { header: 'D8: Aktívna pomoc a podpora klienta', key: 'd8', width: 8.27 },
                { header: 'Charita, brigáda, zbierky iné...', key: 'e1', width: 8.45 },
            ];

            const rows = worksheet.addRows(data);
            rows.forEach((row: Row) => {
                row.height = 23;
                // row.eachCell((cell: Cell) => { cell.style = this._dataRowStyle });
            });

            // Return worksheet if summary report
            if (!!summaryWorkBook) {
                return true;
            }

            const fileName = `Intervencie_${range}.xlsx`;
            const xlsxData = await workbook.xlsx.writeBuffer();
            let blob = new Blob([xlsxData], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            fs.saveAs(blob, fileName);
            return true;
        } catch (err: any) {
            console.error(err);
            return null;
        }
    }

    async generateEnlightenmentExcelFileAsync(dateRange: any, agents: Array<any>, enlightenments: any, summaryWorkBook?: Workbook) {
        try {
            const workbook = !!summaryWorkBook ? summaryWorkBook : new Workbook();
            const worksheet = this._setWorksheetConfiguration(workbook, 'osveta');

            const range = this._getDateRange(dateRange);
            const data: any = this._generateEnlightenmentsData(range, agents, enlightenments);

            worksheet.columns = this._setEnlightenmentTableCols();

            const rows = worksheet.addRows(data);
            rows.forEach((row: Row) => {
                row.height = 14.5;
                // row.eachCell((cell: Cell) => { cell.style = this._dataRowStyle });
            });

            // Return worksheet if summary report
            if (!!summaryWorkBook) {
                return true;
            }

            const fileName = `Osveta_${range}.xlsx`;
            const xlsxData = await workbook.xlsx.writeBuffer();
            let blob = new Blob([xlsxData], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            fs.saveAs(blob, fileName);
            return true;
        } catch (err: any) {
            console.error(err);
            return null;
        }
    }

    async generateCovidMonitoringExcelFileAsync(dateRange: any, agents: Array<any>, covidData: any, summaryWorkBook?: Workbook) {
        try {
            const workbook = !!summaryWorkBook ? summaryWorkBook : new Workbook();
            const worksheet = this._setWorksheetConfiguration(workbook, 'covid_monitoring');

            const range = this._getDateRange(dateRange);
            const data: any = this._generateCovidMonitoringData(range, agents, covidData);

            worksheet.columns = this._setCovidMonitoringTableCols();

            const rows = worksheet.addRows(data);
            rows.forEach((row: Row) => {
                row.height = 14.5;
            });

            // Return worksheet if summary report
            if (!!summaryWorkBook) {
                return true;
            }

            const fileName = `CovidMonitoring_${range}.xlsx`;
            const xlsxData = await workbook.xlsx.writeBuffer();
            let blob = new Blob([xlsxData], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            fs.saveAs(blob, fileName);
            return true;
        } catch (err: any) {
            console.error(err);
            return null;
        }
    }

    async generateActivityExcelFileAsync(dateRange: any, agents: Array<any>, covidData: any, summaryWorkBook?: Workbook) {
        try {
            const workbook = !!summaryWorkBook ? summaryWorkBook : new Workbook();
            const worksheet = this._setWorksheetConfiguration(workbook, 'aktivity');

            const range = this._getDateRange(dateRange);
            const data: any = this._generateActivityData(range, agents, covidData);

            worksheet.columns = [
                { header: 'Mesiac zberu informácií', key: 'dateRange', width: 10.35 },
                { header: 'Meno koordinátora', key: 'nameCoordinator', width: 10.35 },
                { header: 'Meno APZ', key: 'nameAssitant', width: 10.35 },
                { header: 'Lokalita', key: 'location', width: 10.35 },
                { header: 'Aktivita', key: 'activity', width: 10.35 },
                { header: 'Dátum', key: 'updatedAtDate', width: 10.35 },
                { header: 'Čas', key: 'updatedAtTime', width: 10.35 },
            ]

            const rows = worksheet.addRows(data);
            rows.forEach((row: Row) => {
                row.height = 14.5;
                // row.eachCell((cell: Cell) => { cell.style = this._dataRowStyle });
            });

            // Return worksheet if summary report
            if (!!summaryWorkBook) {
                return true;
            }

            const fileName = `Aktivity_${range}.xlsx`;
            const xlsxData = await workbook.xlsx.writeBuffer();
            let blob = new Blob([xlsxData], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            fs.saveAs(blob, fileName);
            return true;
        } catch (err: any) {
            console.error(err);
            return null;
        }
    }


    private _setWorksheetConfiguration(workbook: Workbook, type: string) {
        const worksheet: Worksheet = workbook.addWorksheet(type,
            {
                pageSetup: {
                    horizontalCentered: true,
                    verticalCentered: true,
                    paperSize: 9,
                    orientation: 'landscape',
                    fitToPage: false,
                    scale: 66,
                    showGridLines: true,
                    printArea: 'A1:W50',
                    margins: {
                        left: 0.708661417322835, right: 0.708661417322835,
                        top: 0.748031496062992, bottom: 0.748031496062992,
                        header: 0.31496062992126, footer: 0.31496062992126
                    }
                }
            });

        // Row Heigh Fix
        worksheet.views = [{}];

        return worksheet;
    }

    private _generateInterventionsData(dateRange: any, agents: any, data: any) {
        try {
            if (!data) { return null; }

            const rows: Array<any> = new Array<any>();

            // Set row data
            data.forEach((intervention: any) => {
                const agent = this._setAgentData(agents, intervention);
                const rowData = new InterventionExcelReportModel(dateRange, agent, intervention);
                rows.push(rowData);
            });

            return rows;
        } catch (err: any) {
            console.error(err);
            return new Array<any>();
        }
    }

    private _generateEnlightenmentsData(dateRange: any, agents: any, data: any) {
        try {
            if (!data) { return null; }

            const rows: Array<any> = new Array<any>();

            // Set row data
            data.forEach((enlightenment: any) => {
                const agent = this._setAgentData(agents, enlightenment);
                const rowData = new EnlightenmentExcelReportModel(dateRange, agent, enlightenment);
                rows.push(rowData);
            });

            return rows;
        } catch (err: any) {
            console.error(err);
            return new Array<any>();
        }
    }


    private _generateCovidMonitoringData(dateRange: any, agents: any, data: any) {
        try {
            if (!data) { return null; }

            const rows: Array<any> = new Array<any>();

            // Set row data
            data.forEach((covid: any) => {
                const agent = this._setAgentData(agents, covid);
                const rowData = new CovidMonitoringExcelReportModel(dateRange, agent, covid);
                rows.push(rowData);
            });

            return rows;
        } catch (err: any) {
            console.error(err);
            return new Array<any>();
        }
    }

    private _generateActivityData(dateRange: any, agents: any, data: any) {
        try {
            if (!data) { return null; }

            const rows: Array<any> = new Array<any>();

            // Set row data
            data.forEach((covid: any) => {
                const agent = this._setAgentData(agents, covid);
                const rowData = new ActivityExcelReportModel(dateRange, agent, covid);
                rows.push(rowData);
            });

            return rows;
        } catch (err: any) {
            console.error(err);
            return new Array<any>();
        }
    }

    private _setAgentData(agents: any, intervention: any) {
        let agent = agents.find((x: any) => x.user_id === intervention.user_id);
        agent = !!agent ? agent : {};

        return {
            coordinator_name: !!agent.coordinator_name ? agent.coordinator_name : '',
            name: !!agent.name ? agent.name : '',
            location: !!agent.location ? agent.location : '',
        }
    }

    public _getDateRange(dateRange: any) {
        if (!dateRange || !dateRange.fromDate || !dateRange.toDate) {
            return '';
        }

        const fromMonth = dateRange.fromDate.getUTCMonth() + 1;
        const fromDay = dateRange.fromDate.getUTCDate();

        const toMonth = dateRange.toDate.getUTCMonth() + 1;
        const toDay = dateRange.toDate.getUTCDate() - 1;

        const year = dateRange.fromDate.getUTCFullYear();

        return `${fromDay}/${fromMonth}/${year}-${toDay}/${toMonth}/${year}`;
    }

    private _setEnlightenmentTableCols() {
        const columns =
            [
                { header: 'Mesiac zberu informácií', key: 'dateRange', width: 10.35 },
                { header: 'Meno koordinátora', key: 'nameCoordinator', width: 10.35 },
                { header: 'Meno APZ', key: 'nameAssitant', width: 10.35 },
                { header: 'Lokalita', key: 'location', width: 10.35 },
                { header: 'Zápis', key: 'createdAt', width: 8.45 },
                { header: 'Dátum', key: 'date', width: 8.45 },
            ]

        // A 
        columns.push({ header: 'Počet Jednotlivcov', key: 'no_individuals', width: 9.91 });
        const aCodes = this._enlightenmentCodes('a');
        aCodes.forEach((aCode: any) => {
            columns.push(aCode);
        });

        // B
        columns.push({ header: 'Počet Rodín', key: 'no_families', width: 9.91 });
        columns.push({ header: 'Počet osôb v rodine', key: 'no_people_in_families', width: 9.91 });
        const bCodes = this._enlightenmentCodes('b');
        bCodes.forEach((bCode: any) => {
            columns.push(bCode);
        });

        // C
        columns.push({ header: 'Navštívená MŠ', key: 'school_name', width: 9.91 });
        columns.push({ header: 'Ročník', key: 'school_year', width: 9.91 });
        columns.push({ header: 'Počet žiakov MŠ', key: 'no_students', width: 9.91 });
        const cCodes = this._enlightenmentCodes('c');
        cCodes.forEach((cCode: any) => {
            columns.push(cCode);
        });

        // D
        columns.push({ header: 'Navštívené KC', key: 'community_center_name', width: 9.91 });
        columns.push({ header: 'Počet osôb', key: 'no_community_center_members', width: 9.91 });
        const dCodes = this._enlightenmentCodes('d');
        dCodes.forEach((dCode: any) => {
            columns.push(dCode);
        });

        return columns;
    }

    private _enlightenmentCodes(keyType: string) {
        const codes = [
            { header: 'F1 Poučenie o užívaní lieku - Uveďte počet intervencií', key: '', width: 8 },
            { header: 'F2 Osveta o rizikách užívania liekov v kombinácii s návykovými látkami - Uveďte počet intervencií', key: '', width: 8 },
            { header: 'F3 Poučenie o pitnom režime - Uveďte počet intervencií', key: '', width: 8 },
            { header: 'F4 Osveta pre tehotné - Uveďte počet intervencií', key: '', width: 8 },
            { header: 'F5 Osveta o dojčení, prípadne dohľad nad správnym používaním náhrady stravy pre novorodenca - Uveďte počet intervencií', key: '', width: 8 },
            { header: 'F6 Osveta o ošatení a osobnej hygiene - Uveďte počet intervencií', key: '', width: 8 },
            { header: 'F7 Osveta o preventívnych prehliadkach - Uveďte počet intervencií', key: '', width: 8 },
            { header: 'F8 Osveta o povinnom očkovaní - Uveďte počet intervencií', key: '', width: 8 },
            { header: 'F9 Osveta o starostlivosti o deti a rodinu - Uveďte počet intervencií', key: '', width: 8 },
            { header: 'F10 Osveta - prevencia a liečba pedikulózy - Uveďte počet intervencií', key: '', width: 8 },
            { header: 'F11 Osveta - svrab, prevencia a liečba - Uveďte počet intervencií', key: '', width: 8 },
            { header: 'F12 Osveta - TBC tuberkulóza, prevencia a liečba - Uveďte počet intervencií', key: '', width: 8 },
            { header: 'F13 Osveta - prevencia pre žltačkou A a B - Uveďte počet intervencií', key: '', width: 8 },
            { header: 'F14 Osveta pred ostatnými infekčnými ochoreniami - prevencia, očkovanie - Uveďte počet intervencií', key: '', width: 8 },
            { header: 'F15 Osveta - reprodukčné zdravie a plánované rodičovstvo - Uveďte počet intervencií', key: '', width: 8 },
            { header: 'F16 Osveta - sexuálne zdravie a ochrana pred pohlavnými chorobami - Uveďte počet intervencií', key: '', width: 8 },
            { header: 'F17 Osveta o poskytnutí prvej pomoci a dôležitých telefónnych číslach a dodržaní zásad telefonovania na tiesňové telefónne linky - Uveďte počet intervencií', key: '', width: 8 },
            { header: 'F18 Osveta - osobná hygiena - Uveďte počet intervencií', key: '', width: 8 },
            { header: 'F19 Osveta - komunálna hygiena a ochrana zdravia - Uveďte počet intervencií', key: '', width: 8 },
            { header: 'F20 Osveta - dentálna hygiena - Uveďte počet intervencií', key: '', width: 8 },
            { header: 'F21 Osveta - hygiena domáceho prostredia - Uveďte počet intervencií', key: '', width: 8 },
            { header: 'F22 Osveta - o infekčnom ochorení COVID 19 - Uveďte počet intervencií', key: '', width: 8 },
            { header: 'F23 Osveta - hygiena stolovania - Uveďte počet intervencií', key: '', width: 8 },
            { header: 'F24 Osveta - správna životospráva - Uveďte počet intervencií', key: '', width: 8 },
            { header: 'F25 Osveta - hypertenzia, hypotenzia - prevencia, dodržiavanie liečby, užívanie liekov - Uveďte počet intervencií', key: '', width: 8 },
            { header: 'F26 Osveta - nikotinizmus (fajčenie) - Uveďte počet intervencií', key: '', width: 8 },
            { header: 'F27 Osveta - alkoholizmus - Uveďte počet intervencií', key: '', width: 8 },
            { header: 'F28 Osveta - Osveta o užívaní návykových látok - drogy - Uveďte počet intervencií', key: '', width: 8 },
            { header: 'F29 Osveta - gamblerstvo - Uveďte počet intervencií', key: '', width: 8 },
            { header: 'F30 Osveta- zvyšovanie povedomia o právach osôb so zdravotným postihnutím - Uveďte počet intervencií', key: '', width: 8 },
        ]

        codes.forEach((code: any, i: number) => {
            code.key = `${keyType}${(i + 1)}`;
        })

        return codes;
    }

    private _setCovidMonitoringTableCols() {
        const codes = [
            { header: 'Mesiac zberu informácií', key: 'dateRange', width: 10.35 },
            { header: 'Meno koordinátora', key: 'nameCoordinator', width: 10.35 },
            { header: 'Meno APZ', key: 'nameAssitant', width: 10.35 },
            { header: 'Lokalita', key: 'location', width: 10.35 },

            { header: 'Zápis', key: 'createdAt', width: 8.45 },
            { header: 'Dátum', key: 'date', width: 8.45 },

            { header: 'Počet Vykonaných Testov', key: 'a1', width: 8 },
            { header: 'Pozitívne Testy Celkovo', key: 'a2', width: 8 },
            { header: 'Do 17 rokov', key: 'a3', width: 8 },
            { header: '18-49 rokov', key: 'a4', width: 8 },
            { header: 'Nad 50', key: 'a5', width: 8 },

            { header: 'Počet Vykonaných Testov', key: 'b1', width: 8 },
            { header: 'Pozitívne Testy Celkovo', key: 'b2', width: 8 },
            { header: 'Do 17 rokov', key: 'b3', width: 8 },
            { header: '18-49 rokov', key: 'b4', width: 8 },
            { header: 'Nad 50', key: 'b5', width: 8 },

            { header: 'V Karanténe', key: 'c1', width: 8 },

            { header: 'HOSPITALIZÁCIE', key: 'd1', width: 8 },
            { header: 'Do 17 rokov', key: 'd2', width: 8 },
            { header: '18-49 rokov', key: 'd3', width: 8 },
            { header: 'Nad 50', key: 'd4', width: 8 },

            { header: 'ÚMRTIA', key: 'e1', width: 8 },
            { header: 'Do 17 rokov', key: 'e2', width: 8 },
            { header: 'Do 17 rokov - Očkovanie', key: 'e3', width: 8 },
            { header: '18-49 rokov', key: 'e4', width: 8 },
            { header: '18-49 rokov - Očkovanie', key: 'e5', width: 8 },
            { header: 'Nad 50', key: 'e6', width: 8 },
            { header: 'Nad 50 - Očkovanie', key: 'e7', width: 8 },

            { header: 'Počet Očkovaní', key: 'f1', width: 8 },
            { header: 'Do 17 rokov - 1. Dávka', key: 'f2', width: 8 },
            { header: 'Do 17 rokov - 2. Dávka', key: 'f3', width: 8 },
            { header: 'Do 17 rokov - 3. Dávka', key: 'f4', width: 8 },
            { header: '18-49 rokov - 1. Dávka', key: 'f5', width: 8 },
            { header: '18-49 rokov - 2. Dávka', key: 'f6', width: 8 },
            { header: '18-49 rokov - 3. Dávka', key: 'f7', width: 8 },
            { header: 'Nad 50 rokov - 1. Dávka', key: 'f8', width: 8 },
            { header: 'Nad 50 rokov - 2. Dávka', key: 'f9', width: 8 },
            { header: 'Nad 50 rokov - 3. Dávka', key: 'f10', width: 8 },

            { header: 'Počet Registrácií Na Očkovanie', key: 'h1', width: 8 },
            { header: 'Do 17 rokov - 1. Dávka', key: 'h2', width: 8 },
            { header: 'Do 17 rokov - 2. Dávka', key: 'h3', width: 8 },
            { header: 'Do 17 rokov - 3. Dávka', key: 'h4', width: 8 },
            { header: '18-49 rokov - 1. Dávka', key: 'h5', width: 8 },
            { header: '18-49 rokov - 2. Dávka', key: 'h6', width: 8 },
            { header: '18-49 rokov - 3. Dávka', key: 'h7', width: 8 },
            { header: 'Nad 50 rokov - 1. Dávka', key: 'h8', width: 8 },
            { header: 'Nad 50 rokov - 2. Dávka', key: 'h9', width: 8 },
            { header: 'Nad 50 rokov - 3. Dávka', key: 'h10', width: 8 },

            { header: 'Doplňujúce Informácie', key: 'g1', width: 20 },
        ];
        return codes;
    }
}

export class InterventionExcelReportModel {
    dateRange: string;
    nameCoordinator: string;
    nameAssitant: string;
    location: string;
    createdAt: string;
    date: string;

    a1: number;
    a2: number;
    a3: number;
    a4: number;
    b1: number;
    b2: number;
    b3: number;
    b4: number;
    c1: number;
    c2: number;
    c3: number;
    c4: number;
    c5: number;
    d1: number;
    d2: number;
    d3: number;
    d4: number;
    d5: number;
    d6: number;
    d7: number;
    d8: number;
    e1: number;

    constructor(dateRange: any, agent: any, intervention: any) {
        this._setData(dateRange, agent, intervention);
    }

    private _setData(dateRange: any, agent: any, intervention: any) {
        intervention = !!intervention ? intervention : {};

        this.dateRange = dateRange;
        this.nameCoordinator = !!agent.coordinator_name ? agent.coordinator_name : '-';
        this.nameAssitant = !!agent.name ? agent.name : '-';
        this.location = !!agent.location ? agent.location : '-';

        this.createdAt = this._setDate(intervention.createdAt);
        this.date = this._setDate(intervention.date, true);

        this.a1 = !!intervention.a1 ? intervention.a1 : 0;
        this.a2 = !!intervention.a2 ? intervention.a2 : 0;
        this.a3 = !!intervention.a3 ? intervention.a3 : 0;
        this.a4 = !!intervention.a4 ? intervention.a4 : 0;
        this.b1 = !!intervention.b1 ? intervention.b1 : 0;
        this.b2 = !!intervention.b2 ? intervention.b2 : 0;
        this.b3 = !!intervention.b3 ? intervention.b3 : 0;
        this.b4 = !!intervention.b4 ? intervention.b4 : 0;
        this.c1 = !!intervention.c1 ? intervention.c1 : 0;
        this.c2 = !!intervention.c2 ? intervention.c2 : 0;
        this.c3 = !!intervention.c3 ? intervention.c3 : 0;
        this.c4 = !!intervention.c4 ? intervention.c4 : 0;
        this.c5 = !!intervention.c5 ? intervention.c5 : 0;
        this.d1 = !!intervention.d1 ? intervention.d1 : 0;
        this.d2 = !!intervention.d2 ? intervention.d2 : 0;
        this.d3 = !!intervention.d3 ? intervention.d3 : 0;
        this.d4 = !!intervention.d4 ? intervention.d4 : 0;
        this.d5 = !!intervention.d5 ? intervention.d5 : 0;
        this.d6 = !!intervention.d6 ? intervention.d6 : 0;
        this.d7 = !!intervention.d7 ? intervention.d7 : 0;
        this.d8 = !!intervention.d8 ? intervention.d8 : 0;
        this.e1 = !!intervention.e1 ? intervention.e1 : 0;
    };

    private _setDate(date: string, withoutTime?: boolean) {
        if (!date) { return '-'; }

        const d = new Date(date);
        let rDate = ("0" + d.getDate()).slice(-2) + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + d.getFullYear();
        if (!withoutTime) {
            rDate = rDate + + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
        }

        return rDate;
    }
}

export class EnlightenmentExcelReportModel {
    dateRange: string;
    nameCoordinator: string;
    nameAssitant: string;
    location: string;

    createdAt: string;
    date: string;

    no_individuals: number;
    no_families: number;
    no_people_in_families: number;
    school_name: string;
    school_year: string;
    no_students: number;
    community_center_name: string;
    no_community_center_members: number;

    constructor(dateRange: any, agent: any, enlightenment: any) {
        this._setData(dateRange, agent, enlightenment);
    }

    private _setData(dateRange: any, agent: any, enlightenment: any) {
        enlightenment = !!enlightenment ? enlightenment : {};

        this.dateRange = dateRange;
        this.nameCoordinator = !!agent.coordinator_name ? agent.coordinator_name : '-';
        this.nameAssitant = !!agent.name ? agent.name : '-';
        this.location = !!agent.location ? agent.location : '-';

        this.createdAt = this._setDate(enlightenment.createdAt);
        this.date = this._setDate(enlightenment.date, true);

        this.no_individuals = !!enlightenment.no_individuals ? enlightenment.no_individuals : 0;
        this._setCodes(enlightenment, this, 0, 'a', {});

        this.no_families = !!enlightenment.no_families ? enlightenment.no_families : 0;
        this.no_people_in_families = !!enlightenment.no_people_in_families ? enlightenment.no_people_in_families : 0;
        this._setCodes(enlightenment, this, 1, 'b', {});

        this.school_name = !!enlightenment.school_name ? enlightenment.school_name : '-';
        this.school_year = !!enlightenment.school_year ? enlightenment.school_year : '-';
        this.no_students = !!enlightenment.no_students ? enlightenment.no_students : 0;
        this._setCodes(enlightenment, this, 2, 'c', {});

        this.community_center_name = !!enlightenment.community_center_name ? enlightenment.community_center_name : '-';
        this.no_community_center_members = !!enlightenment.no_community_center_members ? enlightenment.no_community_center_members : 0;
        this._setCodes(enlightenment, this, 1, 'd', {});
    };

    private _setCodes(enlightenment: any, obj: any, codeType: number, type: string, codes: any) {
        const enlightenmentCodes = !!enlightenment.enlightenmentCodes && !!enlightenment.enlightenmentCodes.items ? enlightenment.enlightenmentCodes.items : [];
        let enlightenmentCodeSection = enlightenmentCodes.find((x: any) => x.type === codeType);
        enlightenmentCodeSection = !!enlightenmentCodeSection ? enlightenmentCodeSection : {};

        for (let c = 1; c <= 30; c++) {
            obj[`${type}${c}`] = !!enlightenmentCodeSection[`f${c}`] ? enlightenmentCodeSection[`f${c}`] : 0;
        }
    }

    private _setDate(date: string, withoutTime?: boolean) {
        if (!date) { return '-'; }

        const d = new Date(date);
        let rDate = ("0" + d.getDate()).slice(-2) + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + d.getFullYear();
        if (!withoutTime) {
            rDate = rDate + + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
        }

        return rDate;
    }
}

export class CovidMonitoringExcelReportModel {
    dateRange: string;
    nameCoordinator: string;
    nameAssitant: string;
    location: string;

    createdAt: string;
    date: string;

    a1: number;
    a2: number;
    a3: number;
    a4: number;
    a5: number;

    b1: number;
    b2: number;
    b3: number;
    b4: number;
    b5: number;

    c1: number;
    c2: number;
    c3: number;
    c4: number;

    d1: number;
    d2: number;
    d3: number;
    d4: number;

    e1: number;
    e2: number;
    e3: number;
    e4: number;
    e5: number;
    e6: number;
    e7: number;

    f1: number;
    f2: number;
    f3: number;
    f4: number;
    f5: number;
    f6: number;
    f7: number;
    f8: number;
    f9: number;
    f10: number;

    g1: string;

    h1: number;
    h2: number;
    h3: number;
    h4: number;
    h5: number;
    h6: number;
    h7: number;
    h8: number;
    h9: number;
    h10: number;

    constructor(dateRange: any, agent: any, intervention: any) {
        this._setData(dateRange, agent, intervention);
    }

    private _setData(dateRange: any, agent: any, covidMonitoring: any) {
        covidMonitoring = !!covidMonitoring ? covidMonitoring : {};

        this.dateRange = dateRange;
        this.nameCoordinator = !!agent.coordinator_name ? agent.coordinator_name : '-';
        this.nameAssitant = !!agent.name ? agent.name : '-';
        this.location = !!agent.location ? agent.location : '-';

        this.createdAt = this._setDate(covidMonitoring.createdAt);
        this.date = this._setDate(covidMonitoring.date, true);

        this.a1 = !!covidMonitoring.a1 ? covidMonitoring.a1 : 0;
        this.a2 = !!covidMonitoring.a2 ? covidMonitoring.a2 : 0;
        this.a3 = !!covidMonitoring.a3 ? covidMonitoring.a3 : 0;
        this.a4 = !!covidMonitoring.a4 ? covidMonitoring.a4 : 0;
        this.a5 = !!covidMonitoring.a5 ? covidMonitoring.a5 : 0;

        this.b1 = !!covidMonitoring.b1 ? covidMonitoring.b1 : 0;
        this.b2 = !!covidMonitoring.b2 ? covidMonitoring.b2 : 0;
        this.b3 = !!covidMonitoring.b3 ? covidMonitoring.b3 : 0;
        this.b4 = !!covidMonitoring.b4 ? covidMonitoring.b4 : 0;
        this.b5 = !!covidMonitoring.b5 ? covidMonitoring.b5 : 0;

        this.c1 = !!covidMonitoring.c1 ? covidMonitoring.c1 : 0;

        this.d1 = !!covidMonitoring.d1 ? covidMonitoring.d1 : 0;
        this.d2 = !!covidMonitoring.d2 ? covidMonitoring.d2 : 0;
        this.d3 = !!covidMonitoring.d3 ? covidMonitoring.d3 : 0;
        this.d4 = !!covidMonitoring.d4 ? covidMonitoring.d4 : 0;

        this.e1 = !!covidMonitoring.e1 ? covidMonitoring.e1 : 0;
        this.e2 = !!covidMonitoring.e2 ? covidMonitoring.e2 : 0;
        this.e3 = !!covidMonitoring.e3 ? covidMonitoring.e3 : 0;
        this.e4 = !!covidMonitoring.e4 ? covidMonitoring.e4 : 0;
        this.e5 = !!covidMonitoring.e5 ? covidMonitoring.e5 : 0;
        this.e6 = !!covidMonitoring.e6 ? covidMonitoring.e6 : 0;
        this.e7 = !!covidMonitoring.e7 ? covidMonitoring.e7 : 0;

        this.f1 = !!covidMonitoring.f1 ? covidMonitoring.f1 : 0;
        this.f2 = !!covidMonitoring.f2 ? covidMonitoring.f2 : 0;
        this.f3 = !!covidMonitoring.f3 ? covidMonitoring.f3 : 0;
        this.f4 = !!covidMonitoring.f4 ? covidMonitoring.f4 : 0;
        this.f5 = !!covidMonitoring.f5 ? covidMonitoring.f5 : 0;
        this.f6 = !!covidMonitoring.f6 ? covidMonitoring.f6 : 0;
        this.f7 = !!covidMonitoring.f7 ? covidMonitoring.f7 : 0;
        this.f8 = !!covidMonitoring.f8 ? covidMonitoring.f8 : 0;
        this.f9 = !!covidMonitoring.f9 ? covidMonitoring.f9 : 0;
        this.f10 = !!covidMonitoring.f10 ? covidMonitoring.f10 : 0;

        this.g1 = !!covidMonitoring.g1 ? covidMonitoring.g1 : '-';

        this.h1 = !!covidMonitoring.h1 ? covidMonitoring.h1 : 0;
        this.h2 = !!covidMonitoring.h2 ? covidMonitoring.h2 : 0;
        this.h3 = !!covidMonitoring.h3 ? covidMonitoring.h3 : 0;
        this.h4 = !!covidMonitoring.h4 ? covidMonitoring.h4 : 0;
        this.h5 = !!covidMonitoring.h5 ? covidMonitoring.h5 : 0;
        this.h6 = !!covidMonitoring.h6 ? covidMonitoring.h6 : 0;
        this.h7 = !!covidMonitoring.h7 ? covidMonitoring.h7 : 0;
        this.h8 = !!covidMonitoring.h8 ? covidMonitoring.h8 : 0;
        this.h9 = !!covidMonitoring.h9 ? covidMonitoring.h9 : 0;
        this.h10 = !!covidMonitoring.h10 ? covidMonitoring.h10 : 0;
    };

    private _setDate(date: string, withoutTime?: boolean) {
        if (!date) { return '-'; }

        const d = new Date(date);
        let rDate = ("0" + d.getDate()).slice(-2) + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + d.getFullYear();
        if (!withoutTime) {
            rDate = rDate + + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
        }

        return rDate;
    }
}


export class ActivityExcelReportModel {
    dateRange: string;
    nameCoordinator: string;
    nameAssitant: string;
    location: string;

    activity: string;
    updatedAtDate: string;
    updatedAtTime: string;

    constructor(dateRange: any, agent: any, activity: any) {
        this._setData(dateRange, agent, activity);
    }

    private _setData(dateRange: any, agent: any, data: any) {
        data = !!data ? data : {};

        this.dateRange = dateRange;
        this.nameCoordinator = !!agent.coordinator_name ? agent.coordinator_name : '-';
        this.nameAssitant = !!agent.name ? agent.name : '-';
        this.location = !!agent.location ? agent.location : '-';

        this.activity = this._setActivity(data.activity);
        this.updatedAtDate = this._setDate('date', data.updatedAt);
        this.updatedAtTime = this._setDate('time', data.updatedAt);
    }

    private _setActivity(activity: string) {
        let label = '-';
        if (activity === 'active') {
            label = 'V Práci';
        } else if (activity === 'break') {
            label = 'Na Prestávke';
        } else {
            label = 'Neaktívny';
        }

        return label;
    }

    private _setDate(type: string, date: string) {
        if (!date) {
            return '-';
        }

        const d = new Date(date);
        if (type === 'date') {
            return ("0" + d.getDate()).slice(-2) + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + d.getFullYear();
        } else {
            return ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
        }
    }
}