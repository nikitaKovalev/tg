import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {ENVIRONMENT} from '@tg/shared/environments';
import {QueryParameters} from '@tg/shared/model';
import {Observable} from 'rxjs';

@Injectable()
export abstract class BaseCrudApi<T> {
    protected abstract readonly suffix: string;

    protected readonly http = inject(HttpClient);
    protected readonly environment = inject(ENVIRONMENT);

    get<U>(params: Partial<QueryParameters> = {}): Observable<U> {
        return this.http.get<U>(`${this.environment.baseUrl}/${this.suffix}/`, {
            params,
        });
    }

    getById(id: number | string): Observable<T> {
        return this.http.get<T>(`${this.environment.baseUrl}/${this.suffix}/${id}/`);
    }

    create<U>(body: U): Observable<T> {
        return this.http.post<T>(
            `${this.environment.baseUrl}/${this.suffix}/create/`,
            body,
        );
    }

    update<U>(body: U): Observable<T> {
        return this.http.patch<T>(`${this.environment.baseUrl}/${this.suffix}/`, body);
    }

    delete(id: number | string, params: Partial<QueryParameters> = {}): Observable<T> {
        return this.http.delete<T>(`${this.environment.baseUrl}/${this.suffix}/${id}`, {
            params,
        });
    }
}
