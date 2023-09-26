chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js 22");
		// ----------------------------------------------------------

		$(document).ready(function () {
			var timer;
			var maxSearchTime = 60000; // 60 Sekunden
			var interval = 5000; // 5 Sekunden

			function createTextareaAndButton() {
				var headline = $('<h2>Automate your creation. Insert JSON here</h2>');
				var textarea = $('<textarea name="json_input" id="json_input" cols="30" rows="5"></textarea><br />');
				var button = $('<button id="json_submit">Start</button>');

				// Füge Textarea und Button nach dem p-Element mit der Klasse "manage_remark" ein
				$('.manage_remark').after(headline, textarea, button);

				// Beende die Suche
				console.log("End the search");
				clearInterval(timer);
			}

			function searchForElement() {
				// Suche nach dem Element mit der Klasse ".manage_remark"
				if ($('.manage_remark').length > 0) {
					// Wenn gefunden, erstelle Textarea und Button
					console.log("found it ... create it ...");
					createTextareaAndButton();
					createEventForTextarea();
				} else if (maxSearchTime <= 0) {
					// Wenn die maximale Suchzeit überschritten ist, beende die Suche
					console.log("end search because of max time reached");
					clearInterval(timer);
				} else {
					console.log("search again");
					// Reduziere die verbleibende Suchzeit und suche erneut
					maxSearchTime -= interval;
				}
			}

			// Starte die Suche, wenn auf ein Element mit der Klasse ".active4" geklickt wird
			$('.active4').on('click', function () {
				// Starte die Suche alle 5 Sekunden
				timer = setInterval(searchForElement, interval);
			});
		});

		function createEventForTextarea() {
			jQuery('#json_submit').click(async (e) => {
				let event_json = JSON.parse($('#json_input').val());
				console.log("event json", event_json);

				let createdStages = new Set(); // Ein Set für eindeutige Stages

				for (let item of event_json.items) {
					console.log("item", item);
					// Erstelle die Stage, falls sie noch nicht erstellt wurde
					if (!createdStages.has(item.stage)) {
						await createAStage(item.stage);
						createdStages.add(item.stage); // Füge die Stage zum Set hinzu
					}
				}
			});
		}

		async function createAStage(stagename){
			console.log("create stage", stagename);
			$('div.schedule_content > div:nth-child(1) > div > button').click();
			await sleep(10000);
			console.log("sleep 1000");
			let input = $('#app > div.content > div > div.my_pop > div:nth-child(4) > div.pop_box > div.pop_center.stage_box > form > div > div > div > input');
			console.log("set value", input, input.value, stagename);
			input.value = stagename;
			$('#app > div.content > div > div.my_pop > div:nth-child(4) > div.pop_box > div.pop-btns > button').click();
			console.log("sleep 3000");
			await sleep(5000);
		}

		async function sleep(ms) {
			return new Promise(resolve => setTimeout(resolve, ms));
		}
	}
	}, 10);
});
