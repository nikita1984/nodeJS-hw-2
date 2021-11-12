console.log('Record 1'); // попадает в очередь для немедленного исполнения

setTimeout(() => {             // попадает в очередь для исполнения макрозадач
  console.log('Record 2');          // немедлено исполниться на итерации макрозадач
  Promise.resolve().then(() => {
    setTimeout(() => {
      // исполниться на итерации таймеров макрозадач
      сonsole.log('Record 3');        
      Promise.resolve().then(() => {
        console.log('Record 4');      // исполниться на второй итерации таймеров макрозадач    
      });       
    });
  });       
});

console.log('Record 5'); // попадает в очередь для немедленного исполнения

Promise.resolve().then(() => Promise.resolve().then(() => console.log('Record 6'))); // попадает в очередь для исполнения микрозадач


/* Итого, порядок исполнения кода будет следующий:
Вначале на очереди немедленного исполнения в консоль будет выведено:

Record 1
Record 5

Затем на очереди микрозадач в консоль будет выведено:
Record 6

Затем на очереди макрозадач в консоль будет выведено:
Record 2
Record 3
Record 4
*/