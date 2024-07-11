import { Router } from "@angular/router";

export function checkDifferentUrlsAndRedirects(from:string,to:string,router:Router){
    if (!from.startsWith(to)) {
      router.navigate([to]);
      return false;
    }else{
      return true;
    }
}
    