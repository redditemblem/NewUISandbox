import { Component, input } from '@angular/core';

@Component({
  selector: 'text-fields-with-labeled-header',
  imports: [],
  templateUrl: './text-fields-with-labeled-header.html',
  styleUrl: './text-fields-with-labeled-header.scss',
})
export class TextFieldsWithLabeledHeader {
  label = input.required<string | undefined>();
  title = input.required<string | undefined>();
  titleHref = input<string | undefined>();
  textFields = input<string[] | undefined>();
}