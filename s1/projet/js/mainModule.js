import { aboutPage } from "./aboutPage.js";
import { compPage } from "./compPage.js";
import { contactPage } from "./contactPage.js";
import { experiencePage } from "./experiencePage.js";
import { homePage } from "./homePage.js";
import { loadingPage } from "./loadingPage.js";
import { otherFeatures } from "./otherFeatures.js";
import { projetsPage } from "./projetsPage.js";

function main() {
    loadingPage();
    homePage();
    aboutPage();
    experiencePage();
    projetsPage();
    compPage();
    contactPage();
    otherFeatures();
}
main();