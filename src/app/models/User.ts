/**
 * Created by Sulav on 7/19/17.
 */

interface PostedJob {
  job_id: string;
  title: string;
  feedback: string;
  rating: number;
  preferred_date: Date;
}

interface AppliedJob {
  job_id: string;
  title: string;
  comment: string;
  rating: number;
  preferred_date: Date;
}

export class User {
  _id: string;
  name: string;
  email: string;
  picture: string;
  jobs_posted: Array<PostedJob>;
  jobs_applied: Array<AppliedJob>;

  constructor() {
    this.jobs_posted = [];
    this.jobs_applied = [];
  }
}
