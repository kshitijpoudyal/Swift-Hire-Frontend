import {User} from "./User";
/**
 * Created by Sulav on 7/19/17.
 */

interface Location {
  address: string;
  coords: Array<number | number>
}

export class Job {
  _id: string;
  title: string;
  category: string;
  preferred_date: Date;
  preferred_time: string;
  duration: number;
  hourly_rate: number;
  description: string;
  location: Location;
  status: string;
  posted_by: User;
  applied_by: Array<User>;

  constructor() {
    this.applied_by = [];
  }
}
