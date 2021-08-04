export type APIErrorResponse = any;

export interface IncidentEntity {
  sys_id: string;
  number: string;
  short_description: string;
  assigned_to: AssignedTo;
  opened_at: string;
  urgency: UrgencyEnum;
  comments?: string;
  description: string;
}

export enum UrgencyEnum {
  HIGH = 1,
  MEDIUM = 2,
  LOW = 3,
}

export interface ResolvedBy {
  link: string;
  value: string;
}

export interface OpenedBy {
  link: string;
  value: string;
}

export interface SysDomain {
  link: string;
  value: string;
}

export interface CmdbCi {
  link: string;
  value: string;
}

export interface BusinessService {
  link: string;
  value: string;
}

export interface CallerId {
  link: string;
  value: string;
}

export interface AssignmentGroup {
  link: string;
  value: string;
}

export interface ClosedBy {
  link: string;
  value?: string;
  display_value?: string;
}

export interface Company {
  link: string;
  value: string;
}

export interface AssignedTo {
  link: string;
  value?: string;
  display_value?: string;
}

export interface SysDomain {
  link: string;
  value: string;
}

export interface CostCenter {
  link: string;
  value: string;
}

export interface Company {
  link: string;
  value: string;
}

export interface Department {
  link: string;
  value: string;
}

export interface Manager {
  link: string;
  value: string;
}

export interface Location {
  link: string;
  value: string;
}

export interface SysUser {
  calendar_integration: string;
  country: string;
  user_password: string;
  last_login_time: string;
  source: string;
  sys_updated_on: string;
  building: string;
  web_service_access_only: string;
  notification: string;
  enable_multifactor_authn: string;
  sys_updated_by: string;
  sso_source: string;
  sys_created_on: string;
  sys_domain: SysDomain;
  state: string;
  vip: string;
  sys_created_by: string;
  zip: string;
  home_phone: string;
  time_format: string;
  last_login: string;
  default_perspective: string;
  active: string;
  sys_domain_path: string;
  cost_center: CostCenter;
  phone: string;
  name: string;
  employee_number: string;
  password_needs_reset: string;
  gender: string;
  city: string;
  failed_attempts: string;
  user_name: string;
  roles: string;
  title: string;
  sys_class_name: string;
  sys_id: string;
  internal_integration_user: string;
  ldap_server: string;
  mobile_phone: string;
  street: string;
  company: Company;
  department: Department;
  first_name: string;
  email: string;
  introduction: string;
  preferred_language: string;
  manager: Manager;
  locked_out: string;
  sys_mod_count: string;
  last_name: string;
  photo: string;
  avatar: string;
  middle_name: string;
  sys_tags: string;
  time_zone: string;
  schedule: string;
  date_format: string;
  location: Location;
}
