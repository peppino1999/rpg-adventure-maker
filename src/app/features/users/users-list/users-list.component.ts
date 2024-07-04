import { Component, inject } from '@angular/core';
import { EssentialComponent } from '../../../core/components/essentialComponent';
import { userTableConfig } from '../../../core/configs';
import { User } from '../../../core/models';
import { map } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent extends EssentialComponent {
  tableConfig = userTableConfig;
  users$ = this.route.data.pipe(map((data) => data['users']));

  workerResponse = 0;
  worker = new Worker(new URL('../../../core/test.worker.ts', import.meta.url));
  goToDetail(user: User) {
    this.router.navigate([user.id], { relativeTo: this.route });
  }

  testWorker() {
    // const data = calculatePrimes(this.workerResponse)

    this.worker.addEventListener('message', (message) => {
      console.log('worker response is', message);
    });

    this.worker.postMessage(this.workerResponse);

  }

  override ngOnDestroy(): void {
    this.destroy$.next(null)
    this.destroy$.complete()
    this.worker.removeEventListener('message', ()=>{})
  }
}
