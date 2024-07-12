import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

export function checkDifferentUrlsAndRedirects(
  from: string,
  to: string,
  router: Router
) {
  if (!from.startsWith(to)) {
    router.navigate([to]);
    return false;
  } else {
    return true;
  }
}

export function generateQueryParams(params: Record<string, any>) {
  const paramsOut = new HttpParams();

  for (const param of Object.keys(paramsOut)) {
    paramsOut.set(param, params[param]);
  }
  return paramsOut;
}
