export = PrintHtmlElement;

declare namespace PrintHtmlElement{
    function printElement(element: HTMLElement, opts?: PrintHtmlElementOptions);
    function printHtml(html: string, opts?: PrintHtmlElementOptions);
    
    export interface PrintHtmlElementOptions {
        printMode: string;
        pageTitle: string;
        templateString: string;
        popupProperties: string;
        stylesheets: string[];
        styles: string[];
    }
}