/**
 * Created by Khagesh.Sharma on 4/28/2015.
 */
module HomeInterface {
    export interface Stories {
        name:string;
        status: string
    }

    export interface HomeController {
        speech: string;
        stories: Array<Stories>;
        createStory(): void;
        activate(): void;
    }
}