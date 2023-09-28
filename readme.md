# PUBG Mobile Esport Application Helper

Creating a tournament schedule on the PUBG Mobile application can be a tedious task, especially when you have numerous matches to input. This project provides a solution to streamline the process by importing match data from a Google Sheet and automating the schedule creation with selenium.

## Overview

- Quickly generate a tournament schedule on the PUBG Mobile Esport platform.
- Import match data from a Google Sheet (json) automatically.
- Automate the creation of stages, match days, and matches with specified details.

## Usage

To use this project, follow these steps:

1. **Clone the Repository:**

   Clone this repository to your local machine:
    ```
       git clone https://github.com/roest01/pubgm-esport-application-helper.git
    ```

2. **Install Dependencies:**

   Navigate to the project directory and install the required dependencies:

   ````
   cd pubgm-esport-application-helper
   npm install
   ````

3. **Configure Login Credentials:**

   Open the `schedule.ts` file and provide your login credentials within the script.

4. **Run the Script:**

   Execute the `schedule.ts` file using Mocha from the `/node_modules/mocha`:

    ```
       mocha schedule.ts
    ```

   The script will open a Chrome browser window, log in to the PUBG Mobile Esport platform, and navigate to the "Tournament schedule" section. However, you will need to manually **select the correct tournament** by clicking on "waiting for submission."

   After selecting the appropriate tournament, **click on "Manage Schedule" and then "Add Stage."** The script will automatically populate the stage name, but you will need to **manually save the stage** at this point.

   Subsequently, the script will automatically create Stage Days and Matches without further manual intervention. This manual step of adding the stage allows for a level of manual control to avoid the automatic entry of incorrect data.

5. **Sit Back and Relax:**

   Once you've manually added the stage, the script will efficiently set up your tournament schedule. Monitor the progress and ensure that the automation process completes successfully. If any creation fail restart delete already created data within your json, clean the latest matchday and restart on the level of the matchday. 

## Disclaimer

This script is provided as-is and may require modifications to work with future platform updates. Use it responsibly and in accordance with the platform's terms of service. The Script is not 100% stable and migh break. Using it is your own responsibility. Support provided on <https://discord.gg/euroelite>.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
