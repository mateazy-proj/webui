import { TemplateRef } from "@angular/core";

export interface Toast {
    classname?: string;
    header: string;
    body: string;
    delay?: number;
}
