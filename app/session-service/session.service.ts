import { Injectable } from '@angular/core';




@Injectable()
export class SessionService {
  public session: boolean;
  session = false;

  public userId: string;
  userId = "0";


}
