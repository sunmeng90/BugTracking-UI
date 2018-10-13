import {BehaviorSubject, Observable} from 'rxjs';
import {Employee} from '../model/employee';
import {EmployeeService} from '../service/employee.service';
import {DataSource} from '@angular/cdk/table';
import {CollectionViewer} from '@angular/cdk/collections';
import {PageResult} from '../model/page-result';

export class EmployeeDataSource implements DataSource<Employee> {

  private employeeSubject = new BehaviorSubject<Employee[]>([]);

  public employeeTotalCountSubject = new BehaviorSubject<number>(0);

  constructor(private employeeService: EmployeeService) {
  }

  connect(collectionViewer: CollectionViewer): Observable<Employee[]> {
    return this.employeeSubject;
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.employeeSubject.complete();
    this.employeeTotalCountSubject.complete();
  }

  loadEmployees(filter: string, pageIndex: number, pageSize: number, sortOrder: string) {
    return this.employeeService.getEmployees(filter, pageIndex, pageSize, sortOrder)
      .subscribe(
        pageData => {
          this.employeeSubject.next(pageData['data']);
          this.employeeTotalCountSubject.next(pageData['totalRecord']);
        }
      );
  }

  clear() {
    this.employeeSubject.next([]);
    this.employeeTotalCountSubject.next(0);
  }
}

const pageData = {
  'pageIndex': 1,
  'pageSize': 100,
  'totalPage': 3001,
  'totalRecord': 300029,
  'data': [{
    'id': 1,
    'loginId': 'root',
    'firstName': 'root',
    'lastName': 'root',
    'gender': 'M',
    'email': 'root@123.com',
    'role': {
      'id': 1,
      'name': 'admin',
      'permissions': [{
        'id': 1,
        'resourceName': 'employee',
        'actionName': 'create'
      }, {
        'id': 4,
        'resourceName': 'employee',
        'actionName': 'read'
      }, {
        'id': 5,
        'resourceName': 'employeeReport',
        'actionName': 'read'
      }, {
        'id': 2,
        'resourceName': 'employee',
        'actionName': 'update'
      }, {
        'id': 3,
        'resourceName': 'employee',
        'actionName': 'delete'
      }]
    }
  }, {
    'id': 2,
    'loginId': 'Vivienne',
    'firstName': 'Vivienne',
    'lastName': 'Chen',
    'gender': 'F',
    'email': 'VivienneChen@123.com',
    'role': {
      'id': 4,
      'name': 'manager',
      'permissions': []
    }
  }, {
    'id': 3,
    'loginId': 'meng',
    'firstName': 'meng',
    'lastName': 'sun',
    'gender': 'M',
    'email': 'meng@123.com',
    'role': {
      'id': 2,
      'name': 'developer',
      'permissions': []
    }
  }, {
    'id': 4,
    'loginId': 'jack',
    'firstName': 'jack',
    'lastName': 'ma',
    'gender': 'M',
    'email': 'jack@123.com',
    'role': {
      'id': 2,
      'name': 'developer',
      'permissions': []
    }
  }, {
    'id': 5,
    'loginId': 'lucy',
    'firstName': 'lucy',
    'lastName': 'liu',
    'gender': 'F',
    'email': 'lucy@123.com',
    'role': {
      'id': 2,
      'name': 'developer',
      'permissions': []
    }
  }, {
    'id': 10001,
    'loginId': 'georgi_facello',
    'firstName': 'Georgi',
    'lastName': 'Facello',
    'gender': 'M',
    'email': 'georgi_facello@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10002,
    'loginId': 'bezalel_simmel',
    'firstName': 'Bezalel',
    'lastName': 'Simmel',
    'gender': 'F',
    'email': 'bezalel_simmel@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10003,
    'loginId': 'parto_bamford',
    'firstName': 'Parto',
    'lastName': 'Bamford',
    'gender': 'M',
    'email': 'parto_bamford@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10004,
    'loginId': 'chirstian_koblick',
    'firstName': 'Chirstian',
    'lastName': 'Koblick',
    'gender': 'M',
    'email': 'chirstian_koblick@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10005,
    'loginId': 'kyoichi_maliniak',
    'firstName': 'Kyoichi',
    'lastName': 'Maliniak',
    'gender': 'M',
    'email': 'kyoichi_maliniak@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10006,
    'loginId': 'anneke_preusig',
    'firstName': 'Anneke',
    'lastName': 'Preusig',
    'gender': 'F',
    'email': 'anneke_preusig@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10007,
    'loginId': 'tzvetan_zielinski',
    'firstName': 'Tzvetan',
    'lastName': 'Zielinski',
    'gender': 'F',
    'email': 'tzvetan_zielinski@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10008,
    'loginId': 'saniya_kalloufi',
    'firstName': 'Saniya',
    'lastName': 'Kalloufi',
    'gender': 'M',
    'email': 'saniya_kalloufi@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10009,
    'loginId': 'sumant_peac',
    'firstName': 'Sumant',
    'lastName': 'Peac',
    'gender': 'F',
    'email': 'sumant_peac@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10010,
    'loginId': 'duangkaew_piveteau',
    'firstName': 'Duangkaew',
    'lastName': 'Piveteau',
    'gender': 'F',
    'email': 'duangkaew_piveteau@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10011,
    'loginId': 'mary_sluis',
    'firstName': 'Mary',
    'lastName': 'Sluis',
    'gender': 'F',
    'email': 'mary_sluis@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10012,
    'loginId': 'patricio_bridgland',
    'firstName': 'Patricio',
    'lastName': 'Bridgland',
    'gender': 'M',
    'email': 'patricio_bridgland@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10013,
    'loginId': 'eberhardt_terkki',
    'firstName': 'Eberhardt',
    'lastName': 'Terkki',
    'gender': 'M',
    'email': 'eberhardt_terkki@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10014,
    'loginId': 'berni_genin',
    'firstName': 'Berni',
    'lastName': 'Genin',
    'gender': 'M',
    'email': 'berni_genin@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10015,
    'loginId': 'guoxiang_nooteboom',
    'firstName': 'Guoxiang',
    'lastName': 'Nooteboom',
    'gender': 'M',
    'email': 'guoxiang_nooteboom@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10016,
    'loginId': 'kazuhito_cappelletti',
    'firstName': 'Kazuhito',
    'lastName': 'Cappelletti',
    'gender': 'M',
    'email': 'kazuhito_cappelletti@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10017,
    'loginId': 'cristinel_bouloucos',
    'firstName': 'Cristinel',
    'lastName': 'Bouloucos',
    'gender': 'F',
    'email': 'cristinel_bouloucos@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10018,
    'loginId': 'kazuhide_peha',
    'firstName': 'Kazuhide',
    'lastName': 'Peha',
    'gender': 'F',
    'email': 'kazuhide_peha@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10019,
    'loginId': 'lillian_haddadi',
    'firstName': 'Lillian',
    'lastName': 'Haddadi',
    'gender': 'M',
    'email': 'lillian_haddadi@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10020,
    'loginId': 'mayuko_warwick',
    'firstName': 'Mayuko',
    'lastName': 'Warwick',
    'gender': 'M',
    'email': 'mayuko_warwick@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10021,
    'loginId': 'ramzi_erde',
    'firstName': 'Ramzi',
    'lastName': 'Erde',
    'gender': 'M',
    'email': 'ramzi_erde@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10022,
    'loginId': 'shahaf_famili',
    'firstName': 'Shahaf',
    'lastName': 'Famili',
    'gender': 'M',
    'email': 'shahaf_famili@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10023,
    'loginId': 'bojan_montemayor',
    'firstName': 'Bojan',
    'lastName': 'Montemayor',
    'gender': 'F',
    'email': 'bojan_montemayor@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10024,
    'loginId': 'suzette_pettey',
    'firstName': 'Suzette',
    'lastName': 'Pettey',
    'gender': 'F',
    'email': 'suzette_pettey@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10025,
    'loginId': 'prasadram_heyers',
    'firstName': 'Prasadram',
    'lastName': 'Heyers',
    'gender': 'M',
    'email': 'prasadram_heyers@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10026,
    'loginId': 'yongqiao_berztiss',
    'firstName': 'Yongqiao',
    'lastName': 'Berztiss',
    'gender': 'M',
    'email': 'yongqiao_berztiss@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10027,
    'loginId': 'divier_reistad',
    'firstName': 'Divier',
    'lastName': 'Reistad',
    'gender': 'F',
    'email': 'divier_reistad@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10028,
    'loginId': 'domenick_tempesti',
    'firstName': 'Domenick',
    'lastName': 'Tempesti',
    'gender': 'M',
    'email': 'domenick_tempesti@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10029,
    'loginId': 'otmar_herbst',
    'firstName': 'Otmar',
    'lastName': 'Herbst',
    'gender': 'M',
    'email': 'otmar_herbst@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10030,
    'loginId': 'elvis_demeyer',
    'firstName': 'Elvis',
    'lastName': 'Demeyer',
    'gender': 'M',
    'email': 'elvis_demeyer@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10031,
    'loginId': 'karsten_joslin',
    'firstName': 'Karsten',
    'lastName': 'Joslin',
    'gender': 'M',
    'email': 'karsten_joslin@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10032,
    'loginId': 'jeong_reistad',
    'firstName': 'Jeong',
    'lastName': 'Reistad',
    'gender': 'F',
    'email': 'jeong_reistad@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10033,
    'loginId': 'arif_merlo',
    'firstName': 'Arif',
    'lastName': 'Merlo',
    'gender': 'M',
    'email': 'arif_merlo@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10034,
    'loginId': 'bader_swan',
    'firstName': 'Bader',
    'lastName': 'Swan',
    'gender': 'M',
    'email': 'bader_swan@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10035,
    'loginId': 'alain_chappelet',
    'firstName': 'Alain',
    'lastName': 'Chappelet',
    'gender': 'M',
    'email': 'alain_chappelet@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10036,
    'loginId': 'adamantios_portugali',
    'firstName': 'Adamantios',
    'lastName': 'Portugali',
    'gender': 'M',
    'email': 'adamantios_portugali@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10037,
    'loginId': 'pradeep_makrucki',
    'firstName': 'Pradeep',
    'lastName': 'Makrucki',
    'gender': 'M',
    'email': 'pradeep_makrucki@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10038,
    'loginId': 'huan_lortz',
    'firstName': 'Huan',
    'lastName': 'Lortz',
    'gender': 'M',
    'email': 'huan_lortz@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10039,
    'loginId': 'alejandro_brender',
    'firstName': 'Alejandro',
    'lastName': 'Brender',
    'gender': 'M',
    'email': 'alejandro_brender@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10040,
    'loginId': 'weiyi_meriste',
    'firstName': 'Weiyi',
    'lastName': 'Meriste',
    'gender': 'F',
    'email': 'weiyi_meriste@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10041,
    'loginId': 'uri_lenart',
    'firstName': 'Uri',
    'lastName': 'Lenart',
    'gender': 'F',
    'email': 'uri_lenart@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10042,
    'loginId': 'magy_stamatiou',
    'firstName': 'Magy',
    'lastName': 'Stamatiou',
    'gender': 'F',
    'email': 'magy_stamatiou@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10043,
    'loginId': 'yishay_tzvieli',
    'firstName': 'Yishay',
    'lastName': 'Tzvieli',
    'gender': 'M',
    'email': 'yishay_tzvieli@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10044,
    'loginId': 'mingsen_casley',
    'firstName': 'Mingsen',
    'lastName': 'Casley',
    'gender': 'F',
    'email': 'mingsen_casley@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10045,
    'loginId': 'moss_shanbhogue',
    'firstName': 'Moss',
    'lastName': 'Shanbhogue',
    'gender': 'M',
    'email': 'moss_shanbhogue@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10046,
    'loginId': 'lucien_rosenbaum',
    'firstName': 'Lucien',
    'lastName': 'Rosenbaum',
    'gender': 'M',
    'email': 'lucien_rosenbaum@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10047,
    'loginId': 'zvonko_nyanchama',
    'firstName': 'Zvonko',
    'lastName': 'Nyanchama',
    'gender': 'M',
    'email': 'zvonko_nyanchama@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10048,
    'loginId': 'florian_syrotiuk',
    'firstName': 'Florian',
    'lastName': 'Syrotiuk',
    'gender': 'M',
    'email': 'florian_syrotiuk@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10049,
    'loginId': 'basil_tramer',
    'firstName': 'Basil',
    'lastName': 'Tramer',
    'gender': 'F',
    'email': 'basil_tramer@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10050,
    'loginId': 'yinghua_dredge',
    'firstName': 'Yinghua',
    'lastName': 'Dredge',
    'gender': 'M',
    'email': 'yinghua_dredge@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10051,
    'loginId': 'hidefumi_caine',
    'firstName': 'Hidefumi',
    'lastName': 'Caine',
    'gender': 'M',
    'email': 'hidefumi_caine@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10052,
    'loginId': 'heping_nitsch',
    'firstName': 'Heping',
    'lastName': 'Nitsch',
    'gender': 'M',
    'email': 'heping_nitsch@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10053,
    'loginId': 'sanjiv_zschoche',
    'firstName': 'Sanjiv',
    'lastName': 'Zschoche',
    'gender': 'F',
    'email': 'sanjiv_zschoche@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10054,
    'loginId': 'mayumi_schueller',
    'firstName': 'Mayumi',
    'lastName': 'Schueller',
    'gender': 'M',
    'email': 'mayumi_schueller@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10055,
    'loginId': 'georgy_dredge',
    'firstName': 'Georgy',
    'lastName': 'Dredge',
    'gender': 'M',
    'email': 'georgy_dredge@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10056,
    'loginId': 'brendon_bernini',
    'firstName': 'Brendon',
    'lastName': 'Bernini',
    'gender': 'F',
    'email': 'brendon_bernini@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10057,
    'loginId': 'ebbe_callaway',
    'firstName': 'Ebbe',
    'lastName': 'Callaway',
    'gender': 'F',
    'email': 'ebbe_callaway@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10058,
    'loginId': 'berhard_mcfarlin',
    'firstName': 'Berhard',
    'lastName': 'McFarlin',
    'gender': 'M',
    'email': 'berhard_mcfarlin@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10059,
    'loginId': 'alejandro_mcalpine',
    'firstName': 'Alejandro',
    'lastName': 'McAlpine',
    'gender': 'F',
    'email': 'alejandro_mcalpine@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10060,
    'loginId': 'breannda_billingsley',
    'firstName': 'Breannda',
    'lastName': 'Billingsley',
    'gender': 'M',
    'email': 'breannda_billingsley@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10061,
    'loginId': 'tse_herber',
    'firstName': 'Tse',
    'lastName': 'Herber',
    'gender': 'M',
    'email': 'tse_herber@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10062,
    'loginId': 'anoosh_peyn',
    'firstName': 'Anoosh',
    'lastName': 'Peyn',
    'gender': 'M',
    'email': 'anoosh_peyn@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10063,
    'loginId': 'gino_leonhardt',
    'firstName': 'Gino',
    'lastName': 'Leonhardt',
    'gender': 'F',
    'email': 'gino_leonhardt@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10064,
    'loginId': 'udi_jansch',
    'firstName': 'Udi',
    'lastName': 'Jansch',
    'gender': 'M',
    'email': 'udi_jansch@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10065,
    'loginId': 'satosi_awdeh',
    'firstName': 'Satosi',
    'lastName': 'Awdeh',
    'gender': 'M',
    'email': 'satosi_awdeh@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10066,
    'loginId': 'kwee_schusler',
    'firstName': 'Kwee',
    'lastName': 'Schusler',
    'gender': 'M',
    'email': 'kwee_schusler@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10067,
    'loginId': 'claudi_stavenow',
    'firstName': 'Claudi',
    'lastName': 'Stavenow',
    'gender': 'M',
    'email': 'claudi_stavenow@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10068,
    'loginId': 'charlene_brattka',
    'firstName': 'Charlene',
    'lastName': 'Brattka',
    'gender': 'M',
    'email': 'charlene_brattka@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10069,
    'loginId': 'margareta_bierman',
    'firstName': 'Margareta',
    'lastName': 'Bierman',
    'gender': 'F',
    'email': 'margareta_bierman@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10070,
    'loginId': 'reuven_garigliano',
    'firstName': 'Reuven',
    'lastName': 'Garigliano',
    'gender': 'M',
    'email': 'reuven_garigliano@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10071,
    'loginId': 'hisao_lipner',
    'firstName': 'Hisao',
    'lastName': 'Lipner',
    'gender': 'M',
    'email': 'hisao_lipner@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10072,
    'loginId': 'hironoby_sidou',
    'firstName': 'Hironoby',
    'lastName': 'Sidou',
    'gender': 'F',
    'email': 'hironoby_sidou@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10073,
    'loginId': 'shir_mcclurg',
    'firstName': 'Shir',
    'lastName': 'McClurg',
    'gender': 'M',
    'email': 'shir_mcclurg@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10074,
    'loginId': 'mokhtar_bernatsky',
    'firstName': 'Mokhtar',
    'lastName': 'Bernatsky',
    'gender': 'F',
    'email': 'mokhtar_bernatsky@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10075,
    'loginId': 'gao_dolinsky',
    'firstName': 'Gao',
    'lastName': 'Dolinsky',
    'gender': 'F',
    'email': 'gao_dolinsky@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10076,
    'loginId': 'erez_ritzmann',
    'firstName': 'Erez',
    'lastName': 'Ritzmann',
    'gender': 'F',
    'email': 'erez_ritzmann@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10077,
    'loginId': 'mona_azuma',
    'firstName': 'Mona',
    'lastName': 'Azuma',
    'gender': 'M',
    'email': 'mona_azuma@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10078,
    'loginId': 'danel_mondadori',
    'firstName': 'Danel',
    'lastName': 'Mondadori',
    'gender': 'F',
    'email': 'danel_mondadori@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10079,
    'loginId': 'kshitij_gils',
    'firstName': 'Kshitij',
    'lastName': 'Gils',
    'gender': 'F',
    'email': 'kshitij_gils@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10080,
    'loginId': 'premal_baek',
    'firstName': 'Premal',
    'lastName': 'Baek',
    'gender': 'M',
    'email': 'premal_baek@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10081,
    'loginId': 'zhongwei_rosen',
    'firstName': 'Zhongwei',
    'lastName': 'Rosen',
    'gender': 'M',
    'email': 'zhongwei_rosen@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10082,
    'loginId': 'parviz_lortz',
    'firstName': 'Parviz',
    'lastName': 'Lortz',
    'gender': 'M',
    'email': 'parviz_lortz@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10083,
    'loginId': 'vishv_zockler',
    'firstName': 'Vishv',
    'lastName': 'Zockler',
    'gender': 'M',
    'email': 'vishv_zockler@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10084,
    'loginId': 'tuval_kalloufi',
    'firstName': 'Tuval',
    'lastName': 'Kalloufi',
    'gender': 'M',
    'email': 'tuval_kalloufi@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10085,
    'loginId': 'kenroku_malabarba',
    'firstName': 'Kenroku',
    'lastName': 'Malabarba',
    'gender': 'M',
    'email': 'kenroku_malabarba@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10086,
    'loginId': 'somnath_foote',
    'firstName': 'Somnath',
    'lastName': 'Foote',
    'gender': 'M',
    'email': 'somnath_foote@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10087,
    'loginId': 'xinglin_eugenio',
    'firstName': 'Xinglin',
    'lastName': 'Eugenio',
    'gender': 'F',
    'email': 'xinglin_eugenio@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10088,
    'loginId': 'jungsoon_syrzycki',
    'firstName': 'Jungsoon',
    'lastName': 'Syrzycki',
    'gender': 'F',
    'email': 'jungsoon_syrzycki@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10089,
    'loginId': 'sudharsan_flasterstein',
    'firstName': 'Sudharsan',
    'lastName': 'Flasterstein',
    'gender': 'F',
    'email': 'sudharsan_flasterstein@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10090,
    'loginId': 'kendra_hofting',
    'firstName': 'Kendra',
    'lastName': 'Hofting',
    'gender': 'M',
    'email': 'kendra_hofting@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10091,
    'loginId': 'amabile_gomatam',
    'firstName': 'Amabile',
    'lastName': 'Gomatam',
    'gender': 'M',
    'email': 'amabile_gomatam@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10092,
    'loginId': 'valdiodio_niizuma',
    'firstName': 'Valdiodio',
    'lastName': 'Niizuma',
    'gender': 'F',
    'email': 'valdiodio_niizuma@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10093,
    'loginId': 'sailaja_desikan',
    'firstName': 'Sailaja',
    'lastName': 'Desikan',
    'gender': 'M',
    'email': 'sailaja_desikan@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10094,
    'loginId': 'arumugam_ossenbruggen',
    'firstName': 'Arumugam',
    'lastName': 'Ossenbruggen',
    'gender': 'F',
    'email': 'arumugam_ossenbruggen@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }, {
    'id': 10095,
    'loginId': 'hilari_morton',
    'firstName': 'Hilari',
    'lastName': 'Morton',
    'gender': 'M',
    'email': 'hilari_morton@123.com',
    'role': {
      'id': 0,
      'name': 'na',
      'permissions': []
    }
  }]
};
