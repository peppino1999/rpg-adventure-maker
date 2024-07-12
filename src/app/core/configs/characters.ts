import { Validators } from "@angular/forms";
import { FormConfig } from "../../shared/form/form.component";


export const characterClasses = [
    "Barbaro", 
    "Negromante",
    "Druido",
    "Chierico",
    "Ladro",
    "Warlock",
    "Paladino"
]

export const characterRaces = [ 
    "Elfo",
    "Nano",
    "Gnomo",
    "Umano", 
    "Orco"
]

export const characterBackground = [
    "Soldato", 
    "Accolito",
    "Furante", 
   
]

export function extractOptions(config: string[]) : { label: string; value: string }[]{
    return config.map(y => ({
        label: y,
        value: y
    }))
}

export const characterFormConfig: FormConfig[] = [
    {
        name: 'name',
        label: 'Nome del personaggio',
        type: 'text',
        validators: [Validators.required]
    }, 
    {
        name: 'class',
        label: 'Classe del personaggio',
        type: 'select', 
        options: extractOptions(characterClasses),
        validators: [Validators.required]
    },
    {
        name: 'race',
        label: 'Razza',
        type: 'select', 
        options: extractOptions(characterRaces),
        validators: [Validators.required]
    }, 
    {
        name: 'background',
        label: 'Background',
        type: 'select', 
        options: extractOptions(characterBackground),
        validators: [Validators.required]
    }, 
    {
        name: 'strength',
        label: 'Forza',
        type: 'number',
        validators: [Validators.required]
    }
]