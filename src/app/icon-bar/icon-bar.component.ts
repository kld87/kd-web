import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-bar',
  templateUrl: './icon-bar.component.html',
  styleUrls: ['./icon-bar.component.css']
})
export class IconBarComponent implements OnInit {
  text = {
    default: 'Hover over or tap the above for more info',
    code: '<strong>Full Stack Developer:</strong> SaaS web applications written primarily in modern JavaScript (favouring Angular/React) and PHP',
    host: '<strong>Sysadmin:</strong> Advanced Linux server administration (Ubuntu), Windows desktop/server, Avaya VOIP',
    storage: '<strong>Databases</strong>: MySQL, PostgreSQL, Redis',
    wifi: '<strong>Networking</strong>: Design, configuration & admin. Routing, subnetting, and VLANs. Ubiquiti, plus some Juniper & Cisco.',
    'cloud-traffic': '<strong>Devops</strong>: Atlassian products (JIRA, BitBucket, Bamboo, Confluence), Vagrant, git',
    terminal: '<strong>Scripting:</strong> Python, Bash, cURL (web scraping), PowerShell (limited)',
    'network-globe': '<strong>GIS:</strong> Geoserver, PostGIS, QGIS, Leaflet, OpenStreetMaps, Nominatim, OpenLayers, Google Maps',
    lock: '<strong>Security:</strong> System hardening, secure coding & review, firewall & IDS/IPS configuration',
    users: '<strong>Team Lead:</strong> Product owner and development team lead, architect, mentor, and code reviewer',
    'file-group': '<strong>Writing:</strong> Documentation, API reference, technical writing & editing',
  };
  activeText = 'default';

  constructor() { }

  ngOnInit() {
  }

  activateIcon(e: MouseEvent) {
    const target = e.target as HTMLElement;
    this.activeText = target.getAttribute('shape');
  }
  leaveIcon(e: MouseEvent) {
    this.activeText = 'default';
  }

}
