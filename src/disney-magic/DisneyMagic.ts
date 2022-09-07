export class DisneyMagic {
    NUM_MICKEYS_TO_HIDE = 1;
    CHANCE_OF_MICKEY = .3;

    hideMickeyInText(text: string): string {
        if (this.NUM_MICKEYS_TO_HIDE <= 0) {
            return text;
        }

        if (text.indexOf('o') >= 0 && Math.random() < this.CHANCE_OF_MICKEY) {
            this.NUM_MICKEYS_TO_HIDE--;
            return text.replace("o",
                "<img src='assets/mickey.svg' alt='Hidden mickey' class='hidden-mickey'/>"
            );
        }

        return text;
    }
}