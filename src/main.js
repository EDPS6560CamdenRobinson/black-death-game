        const ATTRIBUTES = [
            { 
                name: "Medical Knowledge", 
                description: "Understanding of herbs, humoral theory, and basic hygiene practices",
                benefits: "✓ Disease scenarios, Helping others",
                drawbacks: "✗ Social scenarios (mistrusted), Economic scenarios (seen as threat)",
                bonuses: { disease: 4, social: -2, economic: -1 }
            },
            { 
                name: "Wealth & Resources", 
                description: "Financial means to flee cities, buy supplies, and access care",
                benefits: "✓ Economic scenarios, Accessing resources",
                drawbacks: "✗ Social scenarios (targeted by mobs), Disease scenarios (can't buy immunity)",
                bonuses: { disease: -1, social: -3, economic: 5 }
            },
            { 
                name: "Rural Isolation", 
                description: "Living far from crowded cities and trade routes",
                benefits: "✓ Disease scenarios, Avoiding chaos",
                drawbacks: "✗ Economic scenarios (no access), Social scenarios (no support)",
                bonuses: { disease: 5, social: -2, economic: -2 }
            },
            { 
                name: "Religious Devotion", 
                description: "Faith and prayer (historical belief in divine protection)",
                benefits: "✓ Social scenarios (community support)",
                drawbacks: "✗ Disease scenarios (mass gatherings), Economic scenarios (tithes)",
                bonuses: { disease: -3, social: 4, economic: -1 }
            },
            { 
                name: "Physical Fitness", 
                description: "Strong constitution and good health before the plague",
                benefits: "✓ Disease scenarios, Surviving hardship",
                drawbacks: "✗ Social scenarios (forced labor), Economic scenarios (labor undervalued)",
                bonuses: { disease: 3, social: -1, economic: -1 }
            },
            { 
                name: "Trade Connections", 
                description: "Network of merchants providing information and resources",
                benefits: "✓ Economic scenarios, Early warnings",
                drawbacks: "✗ Disease scenarios (merchants spread plague), Social scenarios (outsiders)",
                bonuses: { disease: -3, social: -1, economic: 4 }
            },
            { 
                name: "Youth", 
                description: "Being young with a strong immune system",
                benefits: "✓ Disease scenarios (immunity), Social scenarios (valued)",
                drawbacks: "✗ Economic scenarios (inexperienced, not taken seriously)",
                bonuses: { disease: 3, social: 2, economic: -3 }
            },
            { 
                name: "Cleanliness Practices", 
                description: "Regular bathing and avoidance of filth (unusual for the era)",
                benefits: "✓ Disease scenarios (reduces transmission)",
                drawbacks: "✗ Social scenarios (seen as strange), Economic scenarios (wastes resources)",
                bonuses: { disease: 4, social: -2, economic: -1 }
            }
        ];

        const SUPPLIES = [
            { 
                name: "Vinegar & Herbs", 
                description: "Used to purify air and clean surfaces",
                benefits: "✓ Disease scenarios (antiseptic properties)",
                drawbacks: "✗ Economic scenarios (expensive to maintain), Social scenarios (smell isolates)",
                bonuses: { disease: 3, social: -1, economic: -1 }
            },
            { 
                name: "Face Covering", 
                description: "Cloth mask to avoid 'miasma' (bad air)",
                benefits: "✓ Disease scenarios (reduces transmission)",
                drawbacks: "✗ Social scenarios (frightening/suspicious), Economic scenarios (limits trade)",
                bonuses: { disease: 4, social: -2, economic: -1 }
            },
            { 
                name: "Food Stores", 
                description: "Months of preserved food to avoid markets",
                benefits: "✓ Disease scenarios (avoid crowds), Economic scenarios (independent)",
                drawbacks: "✗ Social scenarios (targeted by hungry mobs)",
                bonuses: { disease: 2, social: -3, economic: 2 }
            },
            { 
                name: "Holy Relics", 
                description: "Religious items believed to offer protection",
                benefits: "✓ Social scenarios (community acceptance)",
                drawbacks: "✗ Disease scenarios (no medical benefit), Economic scenarios (cost money)",
                bonuses: { disease: -2, social: 4, economic: -1 }
            },
            { 
                name: "Firewood", 
                description: "For burning clothes and fumigating homes",
                benefits: "✓ Disease scenarios (kills fleas)",
                drawbacks: "✗ Economic scenarios (costly), Social scenarios (smoke annoys neighbors)",
                bonuses: { disease: 3, social: -1, economic: -1 }
            },
            { 
                name: "Travel Documents", 
                description: "Papers allowing you to flee to safer regions",
                benefits: "✓ Economic scenarios (mobility), Disease scenarios (can escape)",
                drawbacks: "✗ Social scenarios (seen as coward/outsider)",
                bonuses: { disease: 2, social: -3, economic: 3 }
            },
            { 
                name: "Medicinal Plants", 
                description: "Angelica, wormwood, and other healing herbs",
                benefits: "✓ Disease scenarios (boosts health)",
                drawbacks: "✗ Social scenarios (accused of witchcraft), Economic scenarios (perishable)",
                bonuses: { disease: 3, social: -2, economic: -1 }
            },
            { 
                name: "Isolated Dwelling", 
                description: "A cottage away from population centers",
                benefits: "✓ Disease scenarios (distance from plague)",
                drawbacks: "✗ Social scenarios (no protection/help), Economic scenarios (no market access)",
                bonuses: { disease: 5, social: -2, economic: -2 }
            },
            { 
                name: "Clean Water Source", 
                description: "Well or spring away from contaminated city water",
                benefits: "✓ Disease scenarios (health maintenance)",
                drawbacks: "✗ Social scenarios (neighbors want access), Economic scenarios (maintenance)",
                bonuses: { disease: 3, social: -2, economic: -1 }
            },
            { 
                name: "Community Connections", 
                description: "Strong ties with neighbors and local leaders",
                benefits: "✓ Social scenarios (mutual aid), Economic scenarios (trade network)",
                drawbacks: "✗ Disease scenarios (gatherings spread plague)",
                bonuses: { disease: -3, social: 4, economic: 2 }
            }
        ];

        const SCENARIOS = [
            // DISEASE SCENARIOS (5)
            {
                category: "disease",
                title: "Plague Rats in the Granary",
                description: "Dead rats have been discovered in the village granary. Fleas are everywhere, and people are beginning to show symptoms. The pestilence is here.",
                survivalThreshold: 16,
                explanation: "Avoiding flea bites and infected rodents was crucial. Distance, cleanliness, and face coverings reduced transmission."
            },
            {
                category: "disease",
                title: "Infected Family Member",
                description: "Someone in your household develops buboes—swollen lymph nodes. They have a high fever and are coughing blood. You must decide whether to stay and care for them or flee.",
                survivalThreshold: 17,
                explanation: "Pneumonic plague spread through respiratory droplets. Isolation and face coverings were essential to survival."
            },
            {
                category: "disease",
                title: "Traveling Merchant Arrives",
                description: "A merchant caravan arrives from a plague-stricken city. They offer goods at low prices, but their presence brings risk of infection to your community.",
                survivalThreshold: 15,
                explanation: "Trade routes were primary vectors of plague transmission. Avoiding contact with travelers reduced infection risk."
            },
            {
                category: "disease",
                title: "Mass Burial Required",
                description: "So many have died that the church asks for volunteers to help bury the dead. The bodies are piled high and decomposing in the summer heat.",
                survivalThreshold: 18,
                explanation: "Direct contact with plague victims and their belongings was extremely dangerous. Medical knowledge and protective measures were vital."
            },
            {
                category: "disease",
                title: "Water Supply Contaminated",
                description: "The town well has been contaminated with sewage and possibly infected waste. People are getting sick from drinking the water.",
                survivalThreshold: 15,
                explanation: "Clean water was essential for health. Access to uncontaminated sources prevented additional diseases during the plague."
            },

            // SOCIAL SCENARIOS (5)
            {
                category: "social",
                title: "Flagellant Procession",
                description: "Religious flagellants arrive in town, whipping themselves bloody and demanding others join their penitent procession. Those who refuse are accused of heresy.",
                survivalThreshold: 14,
                explanation: "Flagellant movements created social pressure but also spread disease through close contact and bloodshed."
            },
            {
                category: "social",
                title: "Accusations of Witchcraft",
                description: "Fearful villagers are looking for scapegoats. Anyone who appears different—too clean, too knowledgeable, or too wealthy—risks being accused of causing the plague through dark magic.",
                survivalThreshold: 15,
                explanation: "Social acceptance and religious conformity protected against mob violence, while being exceptional made you a target."
            },
            {
                category: "social",
                title: "Quarantine Enforcement",
                description: "The city council has ordered all infected households sealed inside their homes. Guards patrol the streets. Your neighbor's house has been marked with a red cross.",
                survivalThreshold: 14,
                explanation: "Social cooperation with quarantine measures required community trust and connections with authorities."
            },
            {
                category: "social",
                title: "Jewish Quarter Attacked",
                description: "Rumors spread that the Jewish community poisoned the wells. A violent mob forms, and you must decide whether to hide your neighbors or join the majority.",
                survivalThreshold: 16,
                explanation: "Social conformity protected against mob violence, but those with moral courage faced deadly persecution."
            },
            {
                category: "social",
                title: "Mandatory Church Gathering",
                description: "The bishop demands all faithful attend a special mass to pray for deliverance. Refusing would mark you as sinful and invite suspicion.",
                survivalThreshold: 15,
                explanation: "Religious devotion provided social acceptance but mass gatherings accelerated disease transmission."
            },

            // ECONOMIC SCENARIOS (5)
            {
                category: "economic",
                title: "Market Shutdown",
                description: "The market has been closed to prevent plague spread. Food prices skyrocket and only those with connections or stored supplies can eat.",
                survivalThreshold: 15,
                explanation: "Economic resources and food stores became survival necessities when trade collapsed during plague outbreaks."
            },
            {
                category: "economic",
                title: "Labor Shortage",
                description: "So many workers have died that wages are rising rapidly. Landowners are desperate for laborers and are offering unprecedented pay and freedom.",
                survivalThreshold: 14,
                explanation: "The plague created the first labor market in Europe. Economic adaptability and trade skills became valuable."
            },
            {
                category: "economic",
                title: "Inheritance Dispute",
                description: "With entire families dying out, inheritance law has collapsed. Opportunists are forging documents and seizing property. Your claim is being challenged.",
                survivalThreshold: 16,
                explanation: "Wealth and legal connections helped secure property rights during the chaos of mass death."
            },
            {
                category: "economic",
                title: "Tax Collector Arrives",
                description: "Despite the plague, the lord's tax collector demands payment. You must either pay in coin or goods, work off your debt, or face imprisonment.",
                survivalThreshold: 14,
                explanation: "Economic resources and trade connections provided options to meet obligations without risking infection."
            },
            {
                category: "economic",
                title: "Fleeing the City",
                description: "The plague has reached your city. Wealthy families are fleeing to country estates, but guards at the gates are demanding bribes to let anyone through.",
                survivalThreshold: 17,
                explanation: "Wealth and travel documents enabled escape to safer rural areas, one of the most effective survival strategies."
            }
        ];

        let selectedAttributes = [];
        let selectedSupplies = [];
        let currentRound = 1;
        let totalScore = 0;
        let roundsSurvived = 0;
        let roundResults = [];
        let usedScenarios = [];

        function startGame() {
            showPhase('phase-attributes');
            renderAttributes();
        }

        function renderAttributes() {
            const grid = document.getElementById('attributes-grid');
            grid.innerHTML = '';
            ATTRIBUTES.forEach((attr, index) => {
                const div = document.createElement('div');
                div.className = 'selection-item';
                div.innerHTML = `
                    <div class="item-name">${attr.name}</div>
                    <div class="item-description">${attr.description}</div>
                    <div class="item-benefits">${attr.benefits}</div>
                    <div class="item-drawbacks">${attr.drawbacks}</div>
                `;
                div.onclick = () => selectAttribute(index, div);
                grid.appendChild(div);
            });
        }

        function selectAttribute(index, element) {
            const attr = ATTRIBUTES[index];
            const attrIndex = selectedAttributes.findIndex(a => a.name === attr.name);
            
            if (attrIndex > -1) {
                selectedAttributes.splice(attrIndex, 1);
                element.classList.remove('selected');
            } else if (selectedAttributes.length < 2) {
                selectedAttributes.push(attr);
                element.classList.add('selected');
            }
            
            document.getElementById('attr-count').textContent = selectedAttributes.length;
            document.getElementById('attr-continue').disabled = selectedAttributes.length !== 2;
        }

        function continueToSupplies() {
            showPhase('phase-supplies');
            renderSupplies();
        }

        function renderSupplies() {
            const grid = document.getElementById('supplies-grid');
            grid.innerHTML = '';
            SUPPLIES.forEach((supply, index) => {
                const div = document.createElement('div');
                div.className = 'selection-item';
                div.innerHTML = `
                    <div class="item-name">${supply.name}</div>
                    <div class="item-description">${supply.description}</div>
                    <div class="item-benefits">${supply.benefits}</div>
                    <div class="item-drawbacks">${supply.drawbacks}</div>
                `;
                div.onclick = () => selectSupply(index, div);
                grid.appendChild(div);
            });
        }

        function selectSupply(index, element) {
            const supply = SUPPLIES[index];
            const supplyIndex = selectedSupplies.findIndex(s => s.name === supply.name);
            
            if (supplyIndex > -1) {
                selectedSupplies.splice(supplyIndex, 1);
                element.classList.remove('selected');
            } else if (selectedSupplies.length < 5) {
                selectedSupplies.push(supply);
                element.classList.add('selected');
            }
            
            document.getElementById('supply-count').textContent = selectedSupplies.length;
            document.getElementById('supply-continue').disabled = selectedSupplies.length !== 5;
        }

        function startRounds() {
            showPhase('phase-game');
            usedScenarios = [];
            updateGameDisplay();
            playRound();
        }

        function updateGameDisplay() {
            document.getElementById('display-attributes').textContent = selectedAttributes.map(a => a.name).join(', ');
            document.getElementById('display-supplies').textContent = selectedSupplies.map(s => s.name).join(', ');
            document.getElementById('display-score').textContent = totalScore;
            document.getElementById('display-survived').textContent = roundsSurvived;
            document.getElementById('round-num').textContent = currentRound;
        }

        function getRandomScenario() {
            const availableScenarios = SCENARIOS.filter(s => !usedScenarios.includes(s));
            if (availableScenarios.length === 0) {
                usedScenarios = [];
                return SCENARIOS[Math.floor(Math.random() * SCENARIOS.length)];
            }
            const scenario = availableScenarios[Math.floor(Math.random() * availableScenarios.length)];
            usedScenarios.push(scenario);
            return scenario;
        }

        function playRound() {
            const scenario = getRandomScenario();
            const content = document.getElementById('round-content');
            content.innerHTML = `
                <div class="scenario-box ${scenario.category}">
                    <div class="scenario-category ${scenario.category}">
                        ${scenario.category.toUpperCase()} SCENARIO
                    </div>
                    <div class="scenario-title">${scenario.title}</div>
                    <div class="scenario-description">${scenario.description}</div>
                </div>
                <div class="decorative-border">
                    <p class="intro-text" style="text-align: center; font-style: italic;">
                        Roll the dice to determine your fate in this scenario...
                    </p>
                </div>
                <div class="dice-container">
                    <button class="button" onclick="rollDice('${scenario.category}', ${scenario.survivalThreshold}, '${scenario.title.replace(/'/g, "\\'")}', '${scenario.explanation.replace(/'/g, "\\'")}')">Roll the Dice</button>
                </div>
            `;
        }

        function rollDice(category, threshold, title, explanation) {
            const die1 = Math.floor(Math.random() * 6) + 1;
            const die2 = Math.floor(Math.random() * 6) + 1;
            const baseRoll = die1 + die2;
            
            // Calculate bonuses
            const attrBonus = selectedAttributes.reduce((sum, attr) => sum + (attr.bonuses[category] || 0), 0);
            const supplyBonus = selectedSupplies.reduce((sum, supply) => sum + (supply.bonuses[category] || 0), 0);
            const totalBonus = attrBonus + supplyBonus;
            const finalScore = baseRoll + totalBonus;
            
            const survived = finalScore >= threshold;
            if (survived) roundsSurvived++;
            totalScore += finalScore;
            
            const content = document.getElementById('round-content');
            content.innerHTML = `
                <div class="scenario-box ${category}">
                    <div class="scenario-category ${category}">
                        ${category.toUpperCase()} SCENARIO
                    </div>
                    <div class="scenario-title">${title}</div>
                </div>
                <div class="dice-container">
                    <div class="dice">🎲 ${die1}</div>
                    <div class="dice">🎲 ${die2}</div>
                </div>
                <div class="result-box ${survived ? 'survived' : 'died'}">
                    <div class="result-title">${survived ? '✓ You Survived This Scenario!' : '✝ You Did Not Survive'}</div>
                    <div class="feedback">
                        <strong>Dice Roll:</strong> ${die1} + ${die2} = ${baseRoll}<br>
                        <strong>Needed to Survive:</strong> ${threshold}<br>
                        <strong>Final Score:</strong> ${finalScore}
                    </div>
                    <div class="bonus-breakdown">
                        <strong>Bonus Breakdown (${category} scenario):</strong>
                        ${generateBonusBreakdown(category, attrBonus, supplyBonus)}
                    </div>
                </div>
                ${generateDetailedFeedback(category, finalScore, survived, threshold, explanation)}
            `;
            
            roundResults.push({ 
                round: currentRound, 
                category: category,
                title: title,
                score: finalScore, 
                threshold: threshold,
                survived: survived 
            });
            
            if (currentRound < 10) {
                content.innerHTML += '<button class="button" onclick="nextRound()">Continue to Next Round</button>';
            } else {
                content.innerHTML += '<button class="button" onclick="showFinalResults()">View Final Results</button>';
            }
            
            updateGameDisplay();
        }

        function generateBonusBreakdown(category, attrBonus, supplyBonus) {
            let html = '<div style="margin-top: 10px;">';
            
            html += '<div><strong>From Attributes:</strong></div>';
            selectedAttributes.forEach(attr => {
                const bonus = attr.bonuses[category] || 0;
                const sign = bonus >= 0 ? '+' : '';
                const className = bonus >= 0 ? 'positive' : 'negative';
                html += `<div class="bonus-item ${className}">&nbsp;&nbsp;${attr.name}: ${sign}${bonus}</div>`;
            });
            
            html += '<div style="margin-top: 10px;"><strong>From Supplies:</strong></div>';
            selectedSupplies.forEach(supply => {
                const bonus = supply.bonuses[category] || 0;
                const sign = bonus >= 0 ? '+' : '';
                const className = bonus >= 0 ? 'positive' : 'negative';
                html += `<div class="bonus-item ${className}">&nbsp;&nbsp;${supply.name}: ${sign}${bonus}</div>`;
            });
            
            const totalBonus = attrBonus + supplyBonus;
            const sign = totalBonus >= 0 ? '+' : '';
            html += `<div style="margin-top: 10px; font-weight: 600;">Total Bonus: ${sign}${totalBonus}</div>`;
            
            html += '</div>';
            return html;
        }

        function generateDetailedFeedback(category, score, survived, threshold, explanation) {
            let feedback = '<div class="feedback-section">';
            
            feedback += `<h3>Historical Context:</h3>`;
            feedback += `<p class="intro-text">${explanation}</p>`;
            
            if (survived) {
                feedback += '<h3>What Helped You Survive:</h3><ul class="feedback-list">';
                
                selectedAttributes.forEach(attr => {
                    if (attr.bonuses[category] > 0) {
                        feedback += `<li class="positive"><strong>${attr.name}</strong> provided a +${attr.bonuses[category]} bonus in this ${category} scenario.</li>`;
                    }
                });
                
                selectedSupplies.forEach(supply => {
                    if (supply.bonuses[category] > 0) {
                        feedback += `<li class="positive"><strong>${supply.name}</strong> provided a +${supply.bonuses[category]} bonus in this ${category} scenario.</li>`;
                    }
                });
                
                feedback += '</ul>';
            } else {
                feedback += '<h3>What Hurt Your Chances:</h3><ul class="feedback-list">';
                
                selectedAttributes.forEach(attr => {
                    if (attr.bonuses[category] < 0) {
                        feedback += `<li class="negative"><strong>${attr.name}</strong> gave you a ${attr.bonuses[category]} penalty in this ${category} scenario.</li>`;
                    }
                });
                
                selectedSupplies.forEach(supply => {
                    if (supply.bonuses[category] < 0) {
                        feedback += `<li class="negative"><strong>${supply.name}</strong> gave you a ${supply.bonuses[category]} penalty in this ${category} scenario.</li>`;
                    }
                });
                
                const gap = threshold - score;
                feedback += `<li class="negative">You needed ${gap} more points to survive this scenario.</li>`;
                feedback += '</ul>';
            }
            
            // Suggestions for improvement
            feedback += '<h3>Better Choices for This Scenario:</h3><ul class="feedback-list">';
            
            const bestAttributesNotChosen = ATTRIBUTES
                .filter(a => !selectedAttributes.find(sa => sa.name === a.name))
                .sort((a, b) => (b.bonuses[category] || 0) - (a.bonuses[category] || 0))
                .slice(0, 2);
            
            bestAttributesNotChosen.forEach(attr => {
                if (attr.bonuses[category] > 0) {
                    feedback += `<li><strong>${attr.name}</strong> would have given you +${attr.bonuses[category]} in this ${category} scenario.</li>`;
                }
            });
            
            const bestSuppliesNotChosen = SUPPLIES
                .filter(s => !selectedSupplies.find(ss => ss.name === s.name))
                .sort((a, b) => (b.bonuses[category] || 0) - (a.bonuses[category] || 0))
                .slice(0, 2);
            
            bestSuppliesNotChosen.forEach(supply => {
                if (supply.bonuses[category] > 0) {
                    feedback += `<li><strong>${supply.name}</strong> would have given you +${supply.bonuses[category]} in this ${category} scenario.</li>`;
                }
            });
            
            feedback += '</ul></div>';
            
            return feedback;
        }

        function nextRound() {
            currentRound++;
            playRound();
        }

        function showFinalResults() {
            showPhase('phase-results');
            
            const avgScore = (totalScore / 10).toFixed(1);
            const survivalRate = (roundsSurvived / 10 * 100).toFixed(0);
            
            let outcome = '';
            if (roundsSurvived >= 8) {
                outcome = '🎉 Extraordinary Survival! You survived most of the plague years. Your choices and luck were exceptional.';
            } else if (roundsSurvived >= 6) {
                outcome = '✓ Impressive Survival! You survived more than half the scenarios. You did better than most of Europe.';
            } else if (roundsSurvived >= 4) {
                outcome = '⚔ Mixed Results. You survived some scenarios but fell to others. Like many, survival was uncertain.';
            } else if (roundsSurvived >= 2) {
                outcome = '✝ Difficult Journey. You survived only a few rounds. The plague was merciless to most.';
            } else {
                outcome = '☠ Swift Death. The plague claimed you quickly. This was the fate of millions across Europe.';
            }
            
            let html = `
                <div class="final-score">Rounds Survived: ${roundsSurvived} / 10 (${survivalRate}%)</div>
                <div class="final-score">Total Score: ${totalScore} (Average: ${avgScore})</div>
                <div class="result-box">
                    <div class="result-title">${outcome}</div>
                </div>
                <div class="feedback-section">
                    <h3>Your Journey Summary:</h3>
                    <ul class="feedback-list">
            `;
            
            roundResults.forEach(result => {
                html += `<li>Round ${result.round} (${result.category.toUpperCase()}): ${result.title}<br>
                         Score: ${result.score}/${result.threshold} - ${result.survived ? '<span class="positive">Survived ✓</span>' : '<span class="negative">Did Not Survive ✝</span>'}</li>`;
            });
            
            html += `</ul></div>`;
            
            // Category performance analysis
            const diseaseResults = roundResults.filter(r => r.category === 'disease');
            const socialResults = roundResults.filter(r => r.category === 'social');
            const economicResults = roundResults.filter(r => r.category === 'economic');
            
            const diseaseSurvived = diseaseResults.filter(r => r.survived).length;
            const socialSurvived = socialResults.filter(r => r.survived).length;
            const economicSurvived = economicResults.filter(r => r.survived).length;
            
            html += `
                <div class="feedback-section">
                    <h3>Performance by Category:</h3>
                    <ul class="feedback-list">
                        <li><strong class="scenario-category disease">DISEASE</strong> scenarios: ${diseaseSurvived}/${diseaseResults.length} survived</li>
                        <li><strong class="scenario-category social">SOCIAL</strong> scenarios: ${socialSurvived}/${socialResults.length} survived</li>
                        <li><strong class="scenario-category economic">ECONOMIC</strong> scenarios: ${economicSurvived}/${economicResults.length} survived</li>
                    </ul>
                </div>
            `;
            
            // Analysis of attribute/supply effectiveness
            html += `
                <div class="feedback-section">
                    <h3>Your Choices Analysis:</h3>
                    <p class="intro-text"><strong>Attributes:</strong> ${selectedAttributes.map(a => a.name).join(', ')}</p>
                    <p class="intro-text"><strong>Supplies:</strong> ${selectedSupplies.map(s => s.name).join(', ')}</p>
            `;
            
            // Determine what worked best
            let bestCategory = 'disease';
            let bestSurvivalRate = diseaseSurvived / Math.max(diseaseResults.length, 1);
            if ((socialSurvived / Math.max(socialResults.length, 1)) > bestSurvivalRate) {
                bestCategory = 'social';
                bestSurvivalRate = socialSurvived / Math.max(socialResults.length, 1);
            }
            if ((economicSurvived / Math.max(economicResults.length, 1)) > bestSurvivalRate) {
                bestCategory = 'economic';
            }
            
            html += `<p class="intro-text">Your choices were most effective in <strong>${bestCategory.toUpperCase()}</strong> scenarios, suggesting your strategy was well-suited for those challenges.</p>`;
            html += `</div>`;
            
            html += `
                <div class="feedback-section">
                    <h3>Historical Context:</h3>
                    <p class="intro-text">
                        The Black Death killed an estimated 30-60% of Europe's population between 1347 and 1353. Your survival rate of ${survivalRate}% ${survivalRate >= 50 ? 'exceeds' : 'reflects'} the historical average.
                    </p>
                    <p class="intro-text">
                        Survival depended on multiple factors: avoiding crowded areas, maintaining hygiene, having resources to flee, and pure luck. No single strategy guaranteed survival, as you discovered through different scenario types. Medieval people faced impossible choices between disease risk, social persecution, and economic ruin.
                    </p>
                    <p class="intro-text">
                        The plague was caused by <em>Yersinia pestis</em>, spread by fleas on rats and through respiratory droplets. Understanding this now shows why isolation, cleanliness, and face coverings were effective—though medieval people attributed success to divine intervention, moral purity, or luck.
                    </p>
                </div>
                <button class="button" onclick="resetGame()">Play Again</button>
            `;
            
            document.getElementById('final-results').innerHTML = html;
        }

        function resetGame() {
            selectedAttributes = [];
            selectedSupplies = [];
            currentRound = 1;
            totalScore = 0;
            roundsSurvived = 0;
            roundResults = [];
            usedScenarios = [];
            showPhase('phase-intro');
        }

        function showPhase(phaseId) {
            document.querySelectorAll('.phase').forEach(phase => {
                phase.classList.remove('active');
            });
            document.getElementById(phaseId).classList.add('active');
        }
