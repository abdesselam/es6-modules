import  {Comp} from './component/comp.js';

export default class App {
    startup (){
        console.log('-----> startup');
        new Comp();
    }
}