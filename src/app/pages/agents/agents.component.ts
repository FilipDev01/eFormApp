import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants } from '../../common/global-constants';
import { AgentsService } from './agents.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Agent {
  id: string;
  name: string;
  coordinator_name: string;
  location: string;
  status: any;
}

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css'],
  providers: [AgentsService]
})
export class AgentsComponent implements OnInit, AfterViewInit {
  public processing: boolean;
  public agents: Array<any>;

  public displayedColumns: string[] = ['id', 'name', 'coordinator_name', 'location', 'status'];

  public dataSource: MatTableDataSource<Agent>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _service: AgentsService,
    private _router: Router
  ) { }

  async ngAfterViewInit() { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  async ngOnInit() {
    this.processing = true;

    GlobalConstants.selectedAgent = null;
    this.agents = await this._service.getAgentsAsync();
    this.dataSource = new MatTableDataSource(this.agents);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.processing = false;
  }

  onRowClick(agent: any) {
    const agnt = this.agents.find((x: any) => x.user_id === agent.user_id);

    GlobalConstants.selectedAgent = agnt;
    this._router.navigate(['/agent', agnt.user_id]);
  }
}
