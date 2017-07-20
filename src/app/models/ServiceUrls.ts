/**
 * Created by Sulav on 7/19/17.
 */

export class ServiceUrls {
  // public static BASE_URL = 'http://swifthire.herokuapp.com/';
  public static BASE_URL = 'http://localhost:8080/';
  public static JOB_SEARCH_URL = ServiceUrls.BASE_URL + 'job/search/';
  public static APPLY_JOB_URL = ServiceUrls.BASE_URL + 'job/apply/';
  public static ADD_USER_URL = ServiceUrls.BASE_URL + 'user/add/';
  public static ADD_JOB_URL = ServiceUrls.BASE_URL + 'job/add/';
  public static LIST_JOBS_URL = ServiceUrls.BASE_URL + 'job/list/';
  public static ADD_COMMENT_URL = ServiceUrls.BASE_URL + 'user/comment/';
  public static ADD_COMMENTPOSTED_URL = ServiceUrls.BASE_URL + 'user/commentPosted/';
  public static PROFILE_APPLIED_JOBS_URL = ServiceUrls.BASE_URL + 'user/profile/applied-jobs/';
  public static GET_PROFILE_APPLIED_JOBS_URL = ServiceUrls.BASE_URL + 'user/profile/applied-jobs/jobs/';
  public static PROFILE_POSTED_JOBS_URL = ServiceUrls.BASE_URL + 'user/profile/posted-jobs/';
  public static GET_PROFILE_POSTED_JOBS_URL = ServiceUrls.BASE_URL + 'user/profile/posted-jobs/jobs/';
  public static APPROVE_USER_PROFILE = ServiceUrls.BASE_URL + 'user/approve/';
  public static CLOSE_JOB_URL = ServiceUrls.BASE_URL + 'job/close/';


}
