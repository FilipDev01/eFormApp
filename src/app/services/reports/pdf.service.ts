import { Injectable } from "@angular/core";
import { Cell, Row, Workbook, Worksheet } from 'exceljs';
import * as fs from 'file-saver';
import * as img from './assets';

@Injectable({ providedIn: 'root', })

export class PdfService {

    private _cellStyle: any;
    private _dataRowStyle: any;
    constructor() {
        this._cellStyle = { alignment: { horizontal: 'center', vertical: 'middle', wrapText: true, shrinkToFit: false }, font: { bold: true, size: 10 } };
        this._dataRowStyle = {
            font: { bold: false },
            alignment: { horizontal: 'center', vertical: 'middle' },
            border:
            {
                top: { style: 'thin', color: { argb: '121212' } },
                bottom: { style: 'thin', color: { argb: '121212' } },
                left: { style: 'thin', color: { argb: '121212' } },
                right: { style: 'thin', color: { argb: '121212' } }
            }
        }
    }

    async generateInterventionExcelFileAsync(agent: any, intervetions: any) {
        try {
            if (!intervetions) {
                return;
            }

            const data: any = this._generatePdfData('interventions', intervetions);

            const workbook = new Workbook();
            const worksheet = this._setWorksheetConfiguration('Intervencie', workbook);

            worksheet.columns = [
                { header: 'Deň', key: 'day_int', width: 10.35, style: this._cellStyle },
                { header: 'A1: Preventívna prehliadka', key: 'a1', width: 9.91, style: this._cellStyle },
                { header: 'A2: Očkovanie', key: 'a2', width: 8.36, style: this._cellStyle },
                { header: 'A3: Materská poradnňa', key: 'a3', width: 7.55, style: this._cellStyle },
                { header: 'A4: OčkovanieCOVID-19', key: 'a4', width: 8.36, style: this._cellStyle },
                { header: 'B1: Všeobecný pre dospelých', key: 'b1', width: 10.36, style: this._cellStyle },
                { header: 'B2: Pediater', key: 'b2', width: 6.82, style: this._cellStyle },
                { header: 'B3: Nemocnica', key: 'b3', width: 8.82, style: this._cellStyle },
                { header: 'B4: Odborný lekár', key: 'b4', width: 7.36, style: this._cellStyle },
                { header: 'C1: TSP', key: 'c1', width: 6.82, style: this._cellStyle },
                { header: 'C2: OU/MS', key: 'c2', width: 6, style: this._cellStyle },
                { header: 'C3: RPZ, 112', key: 'c3', width: 7.91, style: this._cellStyle },
                { header: 'C4: Škola', key: 'c4', width: 5.36, style: this._cellStyle },
                { header: 'C5: ÚPSVaR', key: 'c5', width: 6.45, style: this._cellStyle },
                { header: 'D1: Meranie krvného tlaku', key: 'd1', width: 6.91, style: this._cellStyle },
                { header: 'D2: Prvá pomoc ošetrenie poranení ', key: 'd2', width: 9.36, style: this._cellStyle },
                { header: 'D3: Sprevádzanie na vyšetrenie', key: 'd3', width: 10.27, style: this._cellStyle },
                { header: 'D4: Zdravotné poistenie', key: 'd4', width: 8, style: this._cellStyle },
                { header: 'D5: Kompenzačné pomôcky a ZŤP', key: 'd5', width: 11.73, style: this._cellStyle },
                { header: 'D6: Lieky', key: 'd6', width: 5.82, style: this._cellStyle },
                { header: 'D7: RUVZ-Lekár v prípade epidémie', key: 'd7', width: 7.82, style: this._cellStyle },
                { header: 'D8: Aktívna pomoc a podpora klienta', key: 'd8', width: 8.27, style: this._cellStyle },
                { header: 'Charita, brigáda, zbierky iné...', key: 'e1', width: 8.45, style: this._cellStyle },
            ];


            worksheet.mergeCells('A1', 'H1');
            worksheet.mergeCells('I1', 'R1');
            worksheet.mergeCells('S1', 'W1');

            worksheet.mergeCells('A3', 'C3');
            worksheet.mergeCells('F3', 'H3');

            worksheet.mergeCells('A4', 'W4');

            worksheet.mergeCells('B5', 'E5');
            worksheet.mergeCells('F5', 'I5');
            worksheet.mergeCells('J5', 'N5');
            worksheet.mergeCells('O5', 'V5');

            const imageId1 = workbook.addImage({ base64: img.img2Base64, extension: 'png' });
            worksheet.addImage(imageId1, { tl: { col: 0, row: 0 }, ext: { width: 277, height: 82 } });
            worksheet.addImage(imageId1, { tl: { col: 0, row: 24 }, ext: { width: 277, height: 82 } });

            const imageId2 = workbook.addImage({ base64: img.img1Base64, extension: 'png' });
            worksheet.addImage(imageId2, { tl: { col: 8, row: 0 }, ext: { width: 308, height: 71 } });
            worksheet.addImage(imageId2, { tl: { col: 8, row: 24 }, ext: { width: 308, height: 71 } });

            const imageId3 = workbook.addImage({ base64: img.img3Base64, extension: 'png' });
            worksheet.addImage(imageId3, { tl: { col: 18, row: 0.5 }, ext: { width: 186, height: 59 } });
            worksheet.addImage(imageId3, { tl: { col: 18, row: 24.5 }, ext: { width: 186, height: 59 } });

            const imgRow1: Row = worksheet.getRow(1);
            imgRow1.height = 53.4;
            imgRow1.eachCell((cell: Cell) => { cell.value = ''; });

            const colA3: Cell = worksheet.getCell('A3');
            colA3.value = `Mesiac/rok: ${this._getCurrentMonth()}`;
            colA3.style = { alignment: { horizontal: 'left' } };

            const colF3: Cell = worksheet.getCell('F3');
            colF3.value = `Meno APZ: ${agent.name}`;

            const colA4: Cell = worksheet.getCell('A4');
            colA4.value = 'Intervencie';
            colA4.style = this._cellStyle;

            const colB5: any = worksheet.getCell('B5');
            colB5.value = 'A: Podpora preventívnych zdravotných programov ';
            const colF5: any = worksheet.getCell('F5');
            colF5.value = 'B: Spolupráca s lekármi ';
            const colJ5: any = worksheet.getCell('J5');
            colJ5.value = 'C: Spolupráca ';
            const colO5: any = worksheet.getCell('O5');
            colO5.value = 'D: Priama asistencia klientom';
            const colW5: any = worksheet.getCell('W5');
            colW5.value = 'E: Ďalšie aktivity';

            const headerRow = worksheet.getRow(6);
            headerRow.values = ['Deň', 'A1: Preventívna prehliadka', 'A2: Očkovanie', 'A3: Materská poradnňa', 'A4: OčkovanieCOVID-19', 'B1: Všeobecný pre dospelých', 'B2: Pediater', 'B3: Nemocnica', 'B4: Odborný lekár', 'C1: TSP', 'C2: OU/MS', 'C3: RPZ, 112', 'C4: Škola', 'C5: ÚPSVaR', 'D1: Meranie krvného tlaku', 'D2: Prvá pomoc ošetrenie poranení ', 'D3: Sprevádzanie na vyšetrenie', 'D4: Zdravotné poistenie', 'D5: Kompenzačné pomôcky a ZŤP', 'D6: Lieky', 'D7: RUVZ-Lekár v prípade epidémie', 'D8: Aktívna pomoc a podpora klienta', 'Charita, brigáda, zbierky iné...'];
            headerRow.height = 88;

            const rows0 = worksheet.addRows(data[0]);
            rows0.forEach((row: Row) => {
                row.height = 23;
                row.eachCell((cell: Cell) => { cell.style = this._dataRowStyle });
            });

            worksheet.addRow([]);

            worksheet.mergeCells('A24', 'W24');

            let colA24: Cell = worksheet.getCell('A24');
            colA24.value = '„Tento projekt sa realizuje vďaka podpore z Európskeho sociálneho fondu  v rámci Operačného programu Ľudské zdroje“ \n Odkaz na riadiaci orgán - www.esf.gov.sk \n Sprostredkovateľský orgán - www.mpsvr.sk';

            // PAGE BREAK ROW
            const pageBreakRow: any = worksheet.getRow(24);
            pageBreakRow.height = 47;
            pageBreakRow.eachCell((cell: Cell) => { cell.style = { font: { bold: false }, alignment: { wrapText: true, horizontal: 'center', vertical: 'middle' } } });
            pageBreakRow.addPageBreak();

            worksheet.addRow([]);
            worksheet.addRow([]);


            const imgRow2: Row = worksheet.getRow(25);
            imgRow2.height = 53.4;
            imgRow2.eachCell((cell: Cell) => { cell.value = ''; });

            worksheet.mergeCells('B27', 'E27');
            worksheet.mergeCells('F27', 'I27');
            worksheet.mergeCells('J27', 'N27');
            worksheet.mergeCells('O27', 'V27');

            const colB27: any = worksheet.getCell('B27');
            colB27.value = 'A: Podpora preventívnych zdravotných programov ';
            const colF27: any = worksheet.getCell('F27');
            colF27.value = 'B: Spolupráca s lekármi ';
            const colJ27: any = worksheet.getCell('J27');
            colJ27.value = 'C: Spolupráca ';
            const colO27: any = worksheet.getCell('O27');
            colO27.value = 'D: Priama asistencia klientom';
            const colW27: any = worksheet.getCell('W27');
            colW27.value = 'E: Ďalšie aktivity';

            const headerRow2 = worksheet.getRow(28);
            headerRow2.values = ['Deň', 'A1: Preventívna prehliadka', 'A2: Očkovanie', 'A3: Materská poradnňa', 'A4: OčkovanieCOVID-19', 'B1: Všeobecný pre dospelých', 'B2: Pediater', 'B3: Nemocnica', 'B4: Odborný lekár', 'C1: TSP', 'C2: OU/MS', 'C3: RPZ, 112', 'C4: Škola', 'C5: ÚPSVaR', 'D1: Meranie krvného tlaku', 'D2: Prvá pomoc ošetrenie poranení ', 'D3: Sprevádzanie na vyšetrenie', 'D4: Zdravotné poistenie', 'D5: Kompenzačné pomôcky a ZŤP', 'D6: Lieky', 'D7: RUVZ-Lekár v prípade epidémie', 'D8: Aktívna pomoc a podpora klienta', 'Charita, brigáda, zbierky iné...'];
            headerRow2.height = 88;

            const rows1 = worksheet.addRows(data[1]);
            rows1.forEach((row: Row) => {
                row.height = 23;
                row.eachCell((cell: Cell) => { cell.style = this._dataRowStyle });
            });


            // TOTALS ROW
            const rowTotal = worksheet.addRow(this._calculateTotal('intervetions', intervetions));
            rowTotal.height = 23;

            this._addRowMergeCellsAndSetValue(worksheet, `V mesiaci ${this._getCurrentMonth()} sa v mojej lokalite vyskytlo infekčné ochorenie:`, { align: 'left', height: 15.9 });
            this._addRowMergeCellsAndSetValue(worksheet, "Spolupracoval som s lekármi:", { align: 'left', height: 15.9 });
            this._addRowMergeCellsAndSetValue(worksheet, ["Svojim podpisom vyhlasujem, že údaje uvedené v dokumente  sú pravdivé, reálne a správne a som si vedomý následkov spojených s uvedením/predložením nesprávnych,neúplných a nereálnych údajov.", "Podpis APZ:"], { align: 'left', height: 34, wrap: true, multiple_merges: true, ranges: [{ start: 'A', end: 'R' }, { start: 'S', end: 'W' }] });

            worksheet.addRow([]);

            const lastRow: Row = this._addRowMergeCellsAndSetValue(worksheet, '„Tento projekt sa realizuje vďaka podpore z Európskeho sociálneho fondu  v rámci Operačného programu Ľudské zdroje“ \n Odkaz na riadiaci orgán - www.esf.gov.sk \n Sprostredkovateľský orgán - www.mpsvr.sk', { height: 47 });

            // SET PRINT AREA
            worksheet.pageSetup.printArea = `A1:W${lastRow.number}`;


            const xlsxData = await workbook.xlsx.writeBuffer();
            let blob = new Blob([xlsxData], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

            const agentName = agent.name.replace(' ', '_');
            const fileName = `Intervencie_${this._getCurrentMonth()}_${agentName}.xlsx`;
            fs.saveAs(blob, fileName);

            return true;
        } catch (err: any) {
            console.error(err);
            return null;
        }
    }

    public async generateEnlightenmentExcelFileAsync(agent: any, enlightenments: any) {
        try {
            if (!enlightenments) {
                return;
            }
            const data: any = this._generatePdfData('enlightenments', enlightenments);

            const workbook = new Workbook();
            const worksheet: Worksheet = this._setWorksheetConfiguration('Osveta', workbook);

            worksheet.pageSetup.printArea = "A1:M45";
            worksheet.pageSetup.scale = 51;

            worksheet.columns = [
                { header: 'Deň', key: 'day_int', width: 10, style: this._cellStyle },

                { header: '1: Jednotlivec počet', key: 'a1', width: 13.91, style: this._cellStyle },
                { header: 'Kód intervencie osvetovej činnosti', key: 'a_codes', width: 30, style: this._cellStyle },

                { header: '2: Počet rodín ', key: 'b1', width: 11.73, style: this._cellStyle },
                { header: 'Počet osôb v rodinách', key: 'b2', width: 15, style: this._cellStyle },
                { header: 'Kód intervencie osvetovej činnosti', key: 'b_codes', width: 30, style: this._cellStyle },

                { header: '3:  Škola', key: 'c1', width: 37.27, style: this._cellStyle },
                { header: 'Ročník', key: 'c2', width: 8.45, style: this._cellStyle },
                { header: 'Počet osôb', key: 'c3', width: 11.36, style: this._cellStyle },
                { header: 'Kód intervencie osvetovej činnosti', key: 'c_codes', width: 30, style: this._cellStyle },

                { header: '4: Komunitné centrum', key: 'd1', width: 15.82, style: this._cellStyle },
                { header: 'Počet osôb', key: 'd2', width: 11.36, style: this._cellStyle },
                { header: 'Kód intervencie osvetovej činnosti', key: 'd_codes', width: 30, style: this._cellStyle },
            ];

            // MERGE CELLS
            worksheet.mergeCells('A1', 'E1');
            worksheet.mergeCells('F1', 'J1');
            worksheet.mergeCells('K1', 'M1');

            worksheet.mergeCells('A2', 'D2');
            worksheet.mergeCells('E2', 'M2');

            worksheet.mergeCells('A3', 'M3');

            // ADD IMAGES
            const imageId1 = workbook.addImage({ base64: img.img2Base64, extension: 'png' });
            worksheet.addImage(imageId1, { tl: { col: 0, row: 0 }, ext: { width: 200, height: 70 } });
            worksheet.addImage(imageId1, { tl: { col: 0, row: 21 }, ext: { width: 200, height: 70 } });

            const imageId2 = workbook.addImage({ base64: img.img1Base64, extension: 'png' });
            worksheet.addImage(imageId2, { tl: { col: 5, row: 0.2 }, ext: { width: 200, height: 70 } });
            worksheet.addImage(imageId2, { tl: { col: 5, row: 21 }, ext: { width: 200, height: 70 } });

            const imageId3 = workbook.addImage({ base64: img.img3Base64, extension: 'png' });
            worksheet.addImage(imageId3, { tl: { col: 10, row: 0 }, ext: { width: 200, height: 60 } });
            worksheet.addImage(imageId3, { tl: { col: 10, row: 21 }, ext: { width: 200, height: 70 } });

            const imgRow1: Row = worksheet.getRow(1);
            imgRow1.height = 57;
            imgRow1.eachCell((cell: Cell) => { cell.value = ''; });


            const colA2: Cell = worksheet.getCell('A2');
            colA2.value = `Mesiac/rok: ${this._getCurrentMonth()}`;
            colA2.style = { alignment: { horizontal: 'left' } };

            const colF2: Cell = worksheet.getCell('F2');
            colF2.value = `Meno APZ: ${agent.name}`;

            const colA3: Cell = worksheet.getCell('A3');
            colA3.value = 'Realizácia zdravotnej osvety a výchovy s jednotlivcom a skupinami';
            colA3.style = this._cellStyle;

            const headerRow = worksheet.getRow(4);
            headerRow.values = ['Deň', '1: Jednotlivec počet', 'Kód intervencie osvetovej činnosti', '2: Počet rodín ', 'Počet osôb v rodinách', 'Kód intervencie osvetovej činnosti', '3:  Škola', 'Ročník', 'Počet osôb', 'Kód intervencie osvetovej činnosti', '4: Komunitné centrum', 'Počet osôb', 'Kód intervencie osvetovej činnosti'];
            headerRow.height = 64.3;

            const rows0 = worksheet.addRows(data[0]);
            rows0.forEach((row: Row) => {
                row.height = 23;
                row.eachCell((cell: Cell) => { cell.style = this._dataRowStyle });
            });

            this._addRowMergeCellsAndSetValue(worksheet, [`„Tento projekt sa realizuje vďaka podpore z Európskeho sociálneho fondu  v rámci Operačného programu Ľudské zdroje“ \n Odkaz na riadiaci orgán - www.esf.gov.sk \n Sprostredkovateľský orgán - www.mpsvr.sk`], { height: 47, multiple_merges: true, ranges: [{ start: 'A', end: 'M' }] });

            // PAGE BREAK ROW
            const pageBreakRow: Row = worksheet.getRow(21);
            pageBreakRow.height = 51.7;
            pageBreakRow.eachCell((cell: Cell) => { cell.style = { font: { bold: false }, alignment: { wrapText: true, horizontal: 'center', vertical: 'middle' } } });
            pageBreakRow.addPageBreak(0, 12);

            worksheet.addRow([]);

            const imgRow2: Row = worksheet.getRow(22);
            imgRow2.height = 53.4;
            imgRow2.eachCell((cell: Cell) => { cell.value = ''; });

            const headerRow2 = worksheet.getRow(23);
            headerRow2.values = ['Deň', '1: Jednotlivec počet', 'Kód intervencie osvetovej činnosti', '2: Počet rodín ', 'Počet osôb v rodinách', 'Kód intervencie osvetovej činnosti', '3:  Škola', 'Ročník', 'Počet osôb', 'Kód intervencie osvetovej činnosti', '4: Komunitné centrum', 'Počet osôb', 'Kód intervencie osvetovej činnosti'];
            headerRow2.height = 64.3;

            const rows1 = worksheet.addRows(data[1]);
            rows1.forEach((row: Row) => {
                row.height = 23;
                row.eachCell((cell: Cell) => { cell.style = this._dataRowStyle });
            });

            // TOTALS ROW
            const rowTotal = worksheet.addRow(this._calculateTotal('enlightenments', enlightenments));
            rowTotal.height = 23;

            this._addRowMergeCellsAndSetValue(worksheet, ["Svojim podpisom vyhlasujem, že údaje uvedené v dokumente  sú pravdivé, reálne a správne a som si vedomý následkov spojených s uvedením/predložením nesprávnych,neúplných a nereálnych údajov.", "Podpis APZ:"], { align: 'left', height: 34, wrap: true, multiple_merges: true, ranges: [{ start: 'A', end: 'J' }, { start: 'K', end: 'M' }] });

            worksheet.addRow([]);

            const lastRow: Row = this._addRowMergeCellsAndSetValue(worksheet, [`„Tento projekt sa realizuje vďaka podpore z Európskeho sociálneho fondu  v rámci Operačného programu Ľudské zdroje“ \n Odkaz na riadiaci orgán - www.esf.gov.sk \n Sprostredkovateľský orgán - www.mpsvr.sk`], { height: 47, multiple_merges: true, ranges: [{ start: 'A', end: 'M' }] });
            worksheet.pageSetup.printArea = `A1:M${lastRow.number}`;

            const xlsxData = await workbook.xlsx.writeBuffer();
            let blob = new Blob([xlsxData], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

            const agentName = agent.name.replace(' ', '_');
            const fileName = `Osveta_${this._getCurrentMonth()}_${agentName}.xlsx`;
            fs.saveAs(blob, fileName);

            return true;
        } catch (err: any) {
            console.error(err);
            return null;
        }
    }

    public async generateActivityExcelFileAsync(agent: any, activities: any) {
        try {
            if (!activities) {
                return;
            }

            const rows: Array<any> = new Array<any>();
            activities.forEach((int: any) => {
                rows.push(new ActivityPdfReportModel(int));
            });

            const workbook = new Workbook();
            const worksheet: Worksheet = this._setWorksheetConfiguration('Aktivity', workbook);

            worksheet.pageSetup.printArea = "A1:M45";
            worksheet.pageSetup.scale = 51;

            worksheet.columns = [
                { header: 'Deň', key: 'updatedAtDate', width: 10, style: this._cellStyle },
                { header: 'Čas', key: 'updatedAtTime', width: 10, style: this._cellStyle },
                { header: 'Aktivita', key: 'activity', width: 12, style: this._cellStyle },
            ];

            const rows0 = worksheet.addRows(rows);
            rows0.forEach((row: Row) => {
                row.height = 23;
                row.eachCell((cell: Cell) => { cell.style = this._dataRowStyle });
            });


            const xlsxData = await workbook.xlsx.writeBuffer();
            let blob = new Blob([xlsxData], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

            const agentName = agent.name.replace(' ', '_');
            const fileName = `Aktivity_${this._getCurrentMonth()}_${agentName}.xlsx`;
            fs.saveAs(blob, fileName);

            return true;
        } catch (err: any) {
            console.error(err);
            return null;
        }
    }

    // GENEREATE PDF METHODS
    private _generatePdfData(formType: string, data: Array<any>) {
        if (!data) { return null; }

        const daysInMonth = this._getDaysInCurrentMonth();
        const rows: Array<any> = new Array<any>();

        // Set row data
        daysInMonth.forEach((date: any) => {
            rows.push(this._setRowData(formType, date, data));
        });

        rows.forEach((row: any, i: number) => {
            row.day_int = (i + 1);
        });

        if (formType === 'activities') {
            return rows;
        }

        // Split date to two array as pdf object will have two pages
        const pdfData = new Array<any>();
        pdfData.push(rows.slice(0, 16));
        pdfData.push(rows.slice(16));

        return pdfData;
    }

    private _setRowData(formType: string, date: any, data: any) {
        if (!data || !Array.isArray(data)) {
            return {};
        }

        let int = data.find((x: any) => x.date === date);
        int = !!int ? int : data.find((x: any) => x.date.includes(date.split('T')[0]));

        let rowData: any;
        if (formType === 'interventions') {
            rowData = new InterventionPdfReportModel(int);
        } else if (formType === 'enlightenments') {
            rowData = new EnlightenmentPdfReportModel(int);
        }

        return !!rowData ? rowData : {};
    }

    private _getDaysInCurrentMonth() {
        const currentDate = new Date();
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();

        var date = new Date(year, month, 1);
        var days = [];
        while (date.getMonth() === month) {
            days.push(this._toLocalIsoString(new Date(date), true));
            date.setDate(date.getDate() + 1);
        }
        return days;
    }

    private _setWorksheetConfiguration(type: string, workbook: Workbook) {
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

    private _addRowMergeCellsAndSetValue(worksheet: any, value: any, params?: any) {
        const row: Row = worksheet.addRow([]);
        const rowNumber = row.number;

        if (!!params && !!params.multiple_merges) {
            params.ranges.forEach((range: any, i: number) => {
                worksheet.mergeCells(`${range.start}${rowNumber}`, `${range.end}${rowNumber}`);
                worksheet.getCell(`${range.start}${rowNumber}`).value = value[i];
            });
        } else {
            if (!params || !params.multiple_merges) {
                worksheet.mergeCells(`A${rowNumber}`, `W${rowNumber}`);
                worksheet.getCell(`A${rowNumber}`).value = value;
            }
        }

        if (!!params) {
            if (params.height) {
                row.height = params.height;
            }
            if (params.align || params.wrap) {
                const horizontalAlign = (!!params.align ? 'left' : 'center');
                row.eachCell((cell: Cell) => {
                    cell.style = {
                        alignment: {
                            horizontal: horizontalAlign,
                            wrapText: !!params.wrap
                        }
                    }
                })
            }
        }

        return row;
    }

    private _calculateTotal(type: string, data: any) {
        let totalArray = ['Spolu'];
        function sum(type: string) {
            const sum = (data.map((item: any) => item[type]).reduce((prev: any, next: any) => (!!prev ? prev : 0) + (!!next ? next : 0)));
            return !!sum ? sum : '';
        }

        if (type === 'enlightenments') {
            totalArray = ['Spolu', sum('no_individuals'), '-', sum('no_families'), sum('no_people_in_families'), '-', '-', 0, sum('no_students'), '-', '-', sum('no_community_center_members'), '-'];
        } else if (type === 'intervetions') {
            totalArray = ['Spolu', sum('a1'), sum('a2'), sum('a3'), sum('a4'), sum('b1'), sum('b2'), sum('b3'), sum('b4'), sum('c1'), sum('c2'), sum('c3'), sum('c4'), sum('c5'), sum('d1'), sum('d2'), sum('d3'), sum('d4'), sum('d5'), sum('d6'), sum('d7'), sum('d8'), sum('e1')];
        }

        return totalArray;
    }


    private _getCurrentMonth() {
        const dateNow = new Date();
        const currentMonth = dateNow.getMonth() + 1;

        switch (currentMonth) {
            case 1:
                return 'Január';
            case 2:
                return 'Február';
            case 3:
                return 'Marec';
            case 4:
                return 'Apríl';
            case 5:
                return 'Máj';
            case 6:
                return 'Jún';
            case 7:
                return 'Júl';
            case 8:
                return 'August';
            case 9:
                return 'September';
            case 10:
                return 'Október';
            case 11:
                return 'November';
            case 12:
                return 'December';
            default:
                return '';
        }
    }

    private _toLocalIsoString(date: Date, includeSeconds: boolean) {
        if (!date) {
            return '';
        }

        function pad(n: any) { return n < 10 ? '0' + n : n }
        var localIsoString = date.getFullYear() + '-'
            + pad(date.getMonth() + 1) + '-'
            + pad(date.getDate()) + 'T'
            + pad(date.getHours()) + ':'
            + pad(date.getMinutes()) + ':'
            + pad(date.getSeconds());
        if (date.getTimezoneOffset() == 0) localIsoString += 'Z';
        return localIsoString;
    };
}

export class EnlightenmentPdfReportModel {
    public a1: number;
    public a_codes: string;

    public b1: number;
    public b2: number;
    public b_codes: string;

    public c1: string;
    public c2: any;
    public c3: number;
    public c_codes: string;

    public d1: string;
    public d2: number;
    public d_codes: string;

    constructor(enlightenment: any) {
        this._setData(enlightenment);
    }

    private _setData(enlightenment: any) {
        this.a1 = !!enlightenment ? enlightenment.no_individuals : '';
        this.a_codes = !!enlightenment ? this._setCodes(0, enlightenment.enlightenmentCodes) : '-';

        this.b1 = !!enlightenment ? enlightenment.no_families : '';
        this.b2 = !!enlightenment ? enlightenment.no_people_in_families : '';
        this.b_codes = !!enlightenment ? this._setCodes(1, enlightenment.enlightenmentCodes) : '-';

        this.c1 = !!enlightenment ? enlightenment.school_name : '-';
        this.c2 = !!enlightenment ? enlightenment.school_year : '-';
        this.c3 = !!enlightenment ? enlightenment.no_students : '';
        this.c_codes = !!enlightenment ? this._setCodes(2, enlightenment.enlightenmentCodes) : '-';

        this.d1 = !!enlightenment ? enlightenment.community_center_name : '-';
        this.d2 = !!enlightenment ? enlightenment.no_community_center_members : '';
        this.d_codes = !!enlightenment ? this._setCodes(3, enlightenment.enlightenmentCodes) : '-';
    };

    private _setCodes(type: number, data: any) {
        try {
            if (!data || !data.items || data.items.length === 0) {
                return '-';
            }

            const codesObj = data.items.find((x: any) => x.type === type);
            if (!codesObj) {
                return '-';
            }

            let codesStr = '';
            const keys = Object.keys(codesObj);
            keys.forEach((key: string, i: number) => {
                if (!!codesObj[key] && key.indexOf('f') > -1) {
                    codesStr += `${(i > 0 && codesStr !== '') ? ', ' : ''}${key.toUpperCase()}-${codesObj[key]}`;
                }
            });

            return codesStr;
        } catch (err: any) {
            console.error(err);
            return '-';
        }
    }
}

export class InterventionPdfReportModel {
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

    constructor(intervention: any) {
        this._setData(intervention);
    }

    private _setData(intervention: any) {
        intervention = !!intervention ? intervention : {};

        this.a1 = !!intervention.a1 ? intervention.a1 : '';
        this.a2 = !!intervention.a2 ? intervention.a2 : '';
        this.a3 = !!intervention.a3 ? intervention.a3 : '';
        this.a4 = !!intervention.a4 ? intervention.a4 : '';
        this.b1 = !!intervention.b1 ? intervention.b1 : '';
        this.b2 = !!intervention.b2 ? intervention.b2 : '';
        this.b3 = !!intervention.b3 ? intervention.b3 : '';
        this.b4 = !!intervention.b4 ? intervention.b4 : '';
        this.c1 = !!intervention.c1 ? intervention.c1 : '';
        this.c2 = !!intervention.c2 ? intervention.c2 : '';
        this.c3 = !!intervention.c3 ? intervention.c3 : '';
        this.c4 = !!intervention.c4 ? intervention.c4 : '';
        this.c5 = !!intervention.c5 ? intervention.c5 : '';
        this.d1 = !!intervention.d1 ? intervention.d1 : '';
        this.d2 = !!intervention.d2 ? intervention.d2 : '';
        this.d3 = !!intervention.d3 ? intervention.d3 : '';
        this.d4 = !!intervention.d4 ? intervention.d4 : '';
        this.d5 = !!intervention.d5 ? intervention.d5 : '';
        this.d6 = !!intervention.d6 ? intervention.d6 : '';
        this.d7 = !!intervention.d7 ? intervention.d7 : '';
        this.d8 = !!intervention.d8 ? intervention.d8 : '';
        this.e1 = !!intervention.e1 ? intervention.e1 : '';
    };
}

export class ActivityPdfReportModel {
    public activity: string;
    public updatedAtDate: string;
    public updatedAtTime: string;

    constructor(data: any) {
        this._setData(data);
    }

    private _setData(data: any) {
        this.activity = this._setActivity(data.activity);
        this.updatedAtDate = this._setDate('date', data.updatedAt);
        this.updatedAtTime = this._setDate('time', data.updatedAt);
    };

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
