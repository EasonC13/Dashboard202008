import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(value: any[], info, decending, dummy): unknown {
    console.log("dec", decending)
    console.log(value, info);

    var cond = info.cond;


    if(cond=="userid" && decending){
      return value.sort(function(a,b){
        if(a.userID > b.userID)return -1;
        if(a.userID < b.userID)return 1;
        return 0;
      })
    }
    if(cond=="progress" && decending){
      return value.sort(function(a,b){
        if(a.progress > b.progress)return -1;
        if(a.progress < b.progress)return 1;
        return 0;
      })
    }
    if(cond=="lastupdate" && decending){
      return value.sort(function(a,b){
        if(a.lastUpdate > b.lastUpdate)return -1;
        if(a.lastUpdate < b.lastUpdate)return 1;
        return 0;
      })
    }
    if(cond=="userid" && !decending){
      return value.sort(function(a,b){
        if(a.userID > b.userID)return 1;
        if(a.userID < b.userID)return -1;
        return 0;
      })
    }
    if(cond=="progress" && !decending){
      return value.sort(function(a,b){
        if(a.progress > b.progress)return 1;
        if(a.progress < b.progress)return -1;
        return 0;
      })
    }
    if(cond=="lastupdate" && !decending){
      return value.sort(function(a,b){
        if(a.lastUpdate > b.lastUpdate)return 1;
        if(a.lastUpdate < b.lastUpdate)return -1;
        return 0;
      })
    }
    return value;
  }

}
