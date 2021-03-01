import { Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h1>Hello {{ name }}!</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;

  constructor() {
    let a = new Promise((res, rej) => {
      if (1 >= 2) {
        res("Success");
      } else {
        rej("reject");
      }
    });

    a.then(data => {
      console.log(data);
    })
      .catch(data => {
        console.log(data);
      })
      .finally(() =>{
        console.log('Finally');
      });
  }
}
