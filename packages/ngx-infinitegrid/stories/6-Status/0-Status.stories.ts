import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { NgxInfiniteGridModule } from '../../projects/ngx-infinitegrid/src/public-api';

export default {
  title: "Examples/Status",
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [NgxInfiniteGridModule, CommonModule],
    }),
  ],
};
export * from "./1-Status.stories";
