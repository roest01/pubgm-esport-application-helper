const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

let event_json = {"fields":["name","stage","matchday","year","month","day","maps"],"field_indexes":{},"items":[{"month":"11","stage":"Qualifier week 1","maps":"Erangel; Miramar; Sanhok; Erangel; Miramar; Sanhok","matchday":"1","year":"2023","name":"Q1 TURKEY 1/3","day":"3"},{"stage":"Qualifier week 1","maps":"Erangel; Miramar; Sanhok; Erangel; Miramar; Sanhok","month":"11","year":"2023","matchday":"2","name":"Q1 TURKEY 2/3","day":"4"},{"stage":"Qualifier week 1","month":"11","maps":"Erangel; Miramar; Sanhok; Erangel; Miramar; Sanhok","matchday":"3","year":"2023","name":"Q1 TURKEY 3/3","day":"5"},{"stage":"Qualifier week 1","maps":"Erangel; Miramar; Sanhok; Erangel; Miramar; Sanhok","month":"11","year":"2023","matchday":"4","name":"Q1 CIS 1/3","day":"7"},{"stage":"Qualifier week 1","maps":"Erangel; Miramar; Sanhok; Erangel; Miramar; Sanhok","month":"11","year":"2023","matchday":"5","name":"Q1 CIS 2/3","day":"8"},{"month":"11","maps":"Erangel; Miramar; Sanhok; Erangel; Miramar; Sanhok","stage":"Qualifier week 1","year":"2023","matchday":"6","name":"Q1 CIS 3/3","day":"9"},{"maps":"Erangel; Miramar; Sanhok; Erangel; Miramar; Sanhok","stage":"Qualifier week 1","month":"11","matchday":"7","year":"2023","name":"Q1 MENA 1/3","day":"11"},{"maps":"Erangel; Miramar; Sanhok; Erangel; Miramar; Sanhok","month":"11","stage":"Qualifier week 1","matchday":"8","year":"2023","name":"Q1 MENA 2/3","day":"12"},{"stage":"Qualifier week 1","maps":"Erangel; Miramar; Sanhok; Erangel; Miramar; Sanhok","month":"11","year":"2023","matchday":"9","name":"Q1 MENA 3/3","day":"13"},{"month":"11","stage":"Qualifier week 1","maps":"Erangel; Miramar; Sanhok; Erangel; Miramar; Sanhok","year":"2023","matchday":"10","name":"Q1 EUROPE 1/3","day":"15"},{"stage":"Qualifier week 1","maps":"Erangel; Miramar; Sanhok; Erangel; Miramar; Sanhok","month":"11","year":"2023","matchday":"11","name":"Q1 EUROPE 2/3","day":"16"},{"month":"11","stage":"Qualifier week 1","maps":"Erangel; Miramar; Sanhok; Erangel; Miramar; Sanhok","year":"2023","matchday":"12","name":"Q1 EUROPE 3/3","day":"17"},{"stage":"Qualifier week 2","month":"11","maps":"Erangel; Miramar; Sanhok; Erangel; Miramar","year":"2023","matchday":"13","name":"Q2 TURKEY 1/3","day":"19"},{"maps":"Erangel; Miramar; Sanhok; Erangel; Miramar","month":"11","stage":"Qualifier week 2","matchday":"14","year":"2023","name":"Q2 TURKEY 2/3","day":"20"},{"stage":"Qualifier week 2","month":"11","maps":"Erangel; Miramar; Sanhok; Erangel; Miramar","year":"2023","matchday":"15","name":"Q2 TURKEY 3/3","day":"21"},{"stage":"Qualifier week 2","maps":"Erangel; Miramar; Sanhok; Erangel; Miramar","month":"11","year":"2023","matchday":"16","name":"Q2 CIS 1/3","day":"23"},{"month":"11","maps":"Erangel; Miramar; Sanhok; Erangel; Miramar","stage":"Qualifier week 2","year":"2023","matchday":"17","name":"Q2 CIS 2/3","day":"24"},{"maps":"Erangel; Miramar; Sanhok; Erangel; Miramar","month":"11","stage":"Qualifier week 2","matchday":"18","year":"2023","name":"Q2 CIS 3/3","day":"25"},{"maps":"Erangel; Miramar; Sanhok; Erangel; Miramar","stage":"Qualifier week 2","month":"11","year":"2023","matchday":"19","name":"Q2 MENA 1/3","day":"27"},{"maps":"Erangel; Miramar; Sanhok; Erangel; Miramar","stage":"Qualifier week 2","month":"11","matchday":"20","year":"2023","name":"Q2 MENA 2/3","day":"28"},{"month":"11","maps":"Erangel; Miramar; Sanhok; Erangel; Miramar","stage":"Qualifier week 2","matchday":"21","year":"2023","name":"Q2 MENA 3/3","day":"29"},{"maps":"Erangel; Miramar; Sanhok; Erangel; Miramar","month":"12","stage":"Qualifier week 2","year":"2023","matchday":"22","name":"Q2 EUROPE 1/3","day":"1"},{"month":"12","maps":"Erangel; Miramar; Sanhok; Erangel; Miramar","stage":"Qualifier week 2","matchday":"23","year":"2023","name":"Q2 EUROPE 2/3","day":"2"},{"stage":"Qualifier week 2","month":"12","maps":"Erangel; Miramar; Sanhok; Erangel; Miramar","year":"2023","matchday":"24","name":"Q2 EUROPE 3/3","day":"3"},{"stage":"Semifinals","month":"12","maps":"Erangel; Miramar; Sanhok; Erangel; Miramar","year":"2023","matchday":"25","name":"Semifinals GR1 1/3","day":"5"},{"maps":"Sanhok Erangel; Miramar; Sanhok; Erangel","month":"12","stage":"Semifinals","year":"2023","matchday":"26","name":"Semifinals GR1 2/3","day":"6"},{"stage":"Semifinals","month":"12","maps":"Miramar; Sanhok; Erangel; Miramar; Sanhok","year":"2023","matchday":"27","name":"Semifinals GR1 3/3","day":"7"},{"month":"12","maps":"Erangel; Miramar; Sanhok; Erangel; Miramar","stage":"Semifinals","year":"2023","matchday":"28","name":"Semifinals GR2 1/3","day":"8"},{"month":"12","stage":"Semifinals","maps":"Sanhok Erangel; Miramar; Sanhok; Erangel","matchday":"29","year":"2023","name":"Semifinals GR2 2/3","day":"9"},{"stage":"Semifinals","maps":"Miramar; Sanhok; Erangel; Miramar; Sanhok","month":"12","matchday":"30","year":"2023","name":"Semifinals GR2 3/3","day":"10"},{"maps":"Erangel; Miramar; Sanhok; Erangel; Miramar","stage":"Finals","month":"12","year":"2023","matchday":"31","name":"Finals 1/3","day":"15"},{"stage":"Finals","month":"12","maps":"Sanhok Erangel; Miramar; Sanhok; Erangel","year":"2023","matchday":"32","name":"Finals 2/3","day":"16"},{"month":"12","stage":"Finals","maps":"Miramar; Sanhok; Erangel; Miramar; Sanhok","year":"2023","matchday":"33","name":"Finals 3/3","day":"17"}],"meta":{"count":33}}

const globalWait = 1000;
const initalMatchStartTime = "19:00";
const timePerRound = 45;

describe('Create GroupStage 1', function() {
    this.timeout(1200000)
    let driver
    let vars
    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build()
        vars = {}
    })
    afterEach(async function() {
        await driver.quit();
    })
    it('Create GroupStage 1', async function() {
        await driver.get("https://esports.pubgmobile.com/3rdparty/#/login")
        await driver.manage().window().setRect({ width: 2560, height: 1415 })

        await driver.findElement(By.id("onetrust-accept-btn-handler")).click()
        await driver.findElement(By.css(".login_item:nth-child(2) input")).click()
        await driver.findElement(By.css(".login_item:nth-child(2) input")).sendKeys("XXXX@XXXX.com")
        await driver.findElement(By.css(".login_item:nth-child(3) input")).sendKeys("PASSWD")
        await driver.findElement(By.css(".content")).click()
        await driver.findElement(By.css(".btn_solid")).click()
        await driver.wait(until.elementLocated(By.css(".btn-box:nth-child(2) > .btn-star")), 5000); // Warte maximal 5 Sekunden
        await driver.findElement(By.css(".btn-box:nth-child(2) > .btn-star")).click();



        await driver.wait(until.elementLocated(By.className("schedule_list")), 60000); // Warte maximal 30 Sekunden


        console.log(event_json.items.length);
        let createdStages = new Set(); // Ein Set für eindeutige Stages

        //create stages
        for (let stageItem of event_json.items) {
            // Erstelle die Stage, falls sie noch nicht erstellt wurde
            if (!createdStages.has(stageItem.stage)) {
                await driver.wait(until.elementLocated(By.className("stage_box")), 30000); // Warte maximal 30 Sekunden

                let stageName = stageItem.stage;
                console.log("create stage ", stageName);
                await createStage(stageName);
                createdStages.add(stageName); // Füge die Stage zum Set hinzu

                for (let stageDayItem of event_json.items) {
                    if (stageDayItem.stage === stageName) {
                        console.log("create stageDay for stage ", stageName, " with name ", stageDayItem.name);

                        let matchDayName = stageDayItem.name //match day

                        //calculate match date with leading zero
                        let day = String(stageDayItem.day).padStart(2, '0');
                        let month = String(stageDayItem.month).padStart(2, '0');

                        let matchDayDate = `${stageDayItem.year}-${month}-${day}`;

                        await createStageDay(stageName, matchDayName, matchDayDate)
                        let matches = stageDayItem.maps.split(';')

                        let matchAtThisday = 1; // Initialisiere den Zähler auf 1
                        let matchStartTime = new Date(`${matchDayDate} ${initalMatchStartTime}`); // Setze die Anfangszeit auf 19:00 Uhr

                        for (let map of matches) {
                            map = map.trim(); //trim whitespace on both ends
                            console.log(matchDayName, matchDayDate, "we play ", map, "on stage day", stageDayItem.name);
                            let matchName = "Match" + stageDayItem.matchday + "." + matchAtThisday;
                            await createMatch(stageName, matchDayName, matchName, map, matchDayDate, matchStartTime.toTimeString().slice(0, 5)); // Die Startzeit im Format "HH:mm" übergeben
                            matchStartTime.setMinutes(matchStartTime.getMinutes() + timePerRound); // Füge 45 Minuten hinzu
                            matchAtThisday++; // Inkrementiere
                        }
                    }
                }
            }
        }



        await new Promise(resolve => setTimeout(resolve, 120000));

    })

    async function clickDropDown(contains, dropdown = ".el-select__caret"){
        await driver.findElement(By.css(dropdown)).click();
        await driver.sleep(globalWait);
        const element = await driver.findElement(By.xpath("//li[contains(@class, 'el-select-dropdown__item')]//span[text()='"+contains+"']")).click();
    }

    async function fillInput(input, content){
        input.clear()
        input.click()
        input.sendKeys(content)
    }

    async function createStageDay(stage,dayName,dayDate){
        await driver.findElement(By.css(".day_box .el-icon-circle-plus-outline")).click() //add stage day button
        await driver.sleep(globalWait)
        await clickDropDown(stage)
        console.log("dropdown clicked");
        await driver.sleep(globalWait)
        await fillInput(driver.findElement(By.css('div.my_pop > div:nth-child(4) > div.pop_box > div.pop_center.stage_box > form > div:nth-child(2) > div > div > input')), dayName)
        console.log("input filled with", dayName);
        await driver.sleep(globalWait);
        await fillInput(driver.findElement(By.css('div.my_pop > div:nth-child(4) > div.pop_box > div.pop_center.stage_box > form > div:nth-child(3) > div > div > input')), dayDate)
        console.log("input filled with", dayDate);
        await driver.sleep(globalWait);
        await driver.findElement(By.css(".stage_box")).click() //hide datepicker
        await driver.sleep(globalWait);
        await driver.findElement(By.css("div.my_pop > div:nth-child(4) > div.pop_box > div.pop-btns > button > span")).click() //submit button
        await driver.sleep(1500);
    }

    async function createMatch(stage, stageDay, matchName, map, matchDate, matchTime){
        await driver.findElement(By.css(".match_box .el-icon-circle-plus-outline")).click() //add stage day button
        await driver.sleep(globalWait)
        await clickDropDown(stage)
        await driver.sleep(globalWait)
        await clickDropDown(stageDay+" ("+matchDate+")", "div.my_pop > div:nth-child(4) > div.pop_box > div.pop_center.stage_box > form > div:nth-child(2) > div > div > div > span > span > i")
        await driver.sleep(globalWait)
        await fillInput(driver.findElement(By.css('div.my_pop > div:nth-child(4) > div.pop_box > div.pop_center.stage_box > form > div:nth-child(3) > div > div > input')), matchName)
        await driver.sleep(globalWait)
        await clickDropDown(map, 'div.my_pop > div:nth-child(4) > div.pop_box > div.pop_center.stage_box > form > div:nth-child(4) > div > div > div > span > span > i')
        await driver.sleep(globalWait)
        await fillInput(driver.findElement(By.css('div.my_pop > div:nth-child(4) > div.pop_box > div.pop_center.stage_box > form > div:nth-child(5) > div > div > input')), matchTime)
        await driver.sleep(globalWait)
        await driver.findElement(By.css(".stage_box")).click() //hide datepicker
        await driver.sleep(globalWait)
        await driver.findElement(By.css("div.my_pop > div:nth-child(4) > div.pop_box > div.pop-btns > button > span")).click() //submit button
        await driver.sleep(1500)
    }

    async function clickSubmitButton(){
        await driver.findElement(By.css(".my_pop:nth-child(4) span")).click()
        await driver.sleep(1500);
    }

    async function createStage(stageName){
        console.log("create Stage", stageName);
        //await driver.findElement(By.css("#app > div.content > div > div.my_pop > div.my_pop > div.pop_box > div.pop_center > div > div.schedule_content > div:nth-child(1) > div > button > span")).click() //add stage day button
        //await driver.sleep(globalWait);
        let input = await driver.findElement(By.css(".stage_box .el-input input"));
        fillInput(input,stageName)
        await driver.sleep(globalWait);
        await clickSubmitButton();
    }
})
