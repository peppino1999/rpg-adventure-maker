import { Validators } from "@angular/forms";
import { FormConfig } from "../../shared/form/form.component";

export const EventForm: FormConfig[] = [
    {
        name: 'title',
        label: 'Titolo evento',
        type: 'text',
        validators: [Validators.required]
    },
    {
        name: 'content',
        label: 'Inserisci il contenuto del tuo evento',
        type: 'textarea',
        validators: [Validators.required]
    }
]