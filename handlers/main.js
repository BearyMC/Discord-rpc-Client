// Importing everything
const client   = require('discord-rich-presence')('777249766735478806')
const figlet   = require('figlet')
const color    = require('chalk')
const readline = require('readline');
const setTitle = require('node-bash-title');
const version  = '2.3.7'
const rl       = readline.createInterface({ input: process.stdin, output: process.stdout })
module.exports = async () => {
  // Making the banner
  await figlet('Discord RPC', { font: 'Lean' } , function(err, data) {
    console.clear()
    console.log(color.cyan(`┌──Discord RPC v${version}───────────────────────────────────────────────────────────────Connecting...────────┐`))
    console.log(color.redBright(data))
    console.log(color.cyan(`└────────────────────────────────────────────────────────────────────────────────── by Lil_Bear#1450 ──┘`)) 

    // Setting console title
    setTitle('Discord RPC - Connecting... - dev : Lil_Bear#1450');
  })

  // Handling game requests
  client.on('join', (secret) => { console.log('we should join with', secret) });
  client.on('spectate', (secret) => { console.log('we should spectate with', secret) });
  client.on('joinRequest', (user) => { client.reply(user, 'YES') });

  // Connected !
  client.on('connected', async () => { 
    console.clear()
    await figlet('Discord RPC', { font: 'Lean' } , function(err, data) {

      // Clearing the console
      console.clear()

      // Making the banner (again)
      console.log(color.cyan(`┌──Discord RPC v${version}───────────────────────────────────────────────────────────────Connected──────────┐`))
      console.log(color.greenBright(data))
      console.log(color.cyan(`└────────────────────────────────────────────────────────────────────────────────── by Lil_Bear#1450 ──┘`)) 

      // Making the menu
      console.log('\n\n')
      console.log(color.redBright(`Please select an option`))
      console.log(color.redBright(`1) Default configuration`))
      console.log(color.redBright(`2) Random configuration`))
      console.log(color.redBright(`3) Custom configuration`))

      // Setting console title
      setTitle('Discord RPC - Connected - dev : Lil_Bear#1450');
    })

    rl.question('', (answer) => {
      if(answer === '1') { 
        return defaultConfig()
      } else if(answer === '2') {
        return randomConfig()
      } else if (answer === '3') {
        return customConfig()
      } else {
      rl.close()
      }
    })
  })
}

// Function => Default config
async function defaultConfig() {
  // Updating values
  client.updatePresence({
    state: 'slithering',
    details: 'I\'m a snake🐍',
    startTimestamp: new Date(),
    largeImageKey: 'drpc',
    largeImageText: `Discord Rich Presence v${version}`,
    smallImageKey: 'bear-logo',
    smallImageText: 'dev Lil_Bear#1450',
    partyId: 'bearys_party',
  })

  // Calling the banner function
  banner()

  // Console.logging the choice
  console.log(color.blueBright('Selected : Default config'))
  console.log('\n')

  // Console.logging the Details
  console.log(color.blueBright(`Presence Title : Slitherinh`))
  console.log(color.blueBright(`Presence Description : I'm a snake🐍`))

  console.log('\n')
  console.log(color.redBright(`Image Settings`))
  console.log(color.blueBright(`Large Image Text : Discord Rich Presence v${version}`))
  console.log(color.blueBright(`Small Image Text : dev Lil_Bear#1450`))
}

// Function => Custom Config
async function customConfig() {
  // defining values
  let a1;
  let a2;
  let a3;
  let a4;
  let a5;

  // Calling the banner function
  banner()

  // Logging choice
  console.log(color.blueBright('Selected : Custom config'))

  // Asking questions for the rpc
  console.log(color.redBright(`Everything needs to be atleast 2 characters!`))
  console.log(color.redBright(`Rich Presence Title : `))
  rl.question('', (answer) => { 
    if(answer.length < 2) a1 = `${answer} - bear`
    else a1 = answer

    console.log(color.redBright(`Rich Presence Description : `))
    rl.question('', (answer) => { 
      if(answer.length < 2) a2 = `${answer} - bear`
      else a2 = answer

      console.log(color.redBright(`Rich Presence PartyID : `))
      rl.question('', (answer) => { 
        if(answer.length < 2) a3 = `${answer}_party`
        else a3 = answer

        console.log(color.redBright(`Rich Presence Large Image Text : `))
        rl.question('', (answer) => {
          if(answer.length < 2) a4 = `Discord Rich Presence v${version}`
          else a4 = answer

          console.log(color.redBright(`Rich Presence Small Image Text : `))
          rl.question('', (answer) => {
            if(answer.length < 2) a5 = `Dev Lil_Bear#1450`
            else a5 = answer

            // Updating values
            client.updatePresence({
              state: a2,
              details: a1,
              startTimestamp: new Date(),
              largeImageKey: 'drpc',
              largeImageText: a4,
              smallImageKey: 'bear-logo',
              smallImageText: a5,
              partyId: a3,
            })

            console.log('\n')

            // Console.logging the Details
            console.log(color.blueBright(`Presence Title : ${a1}`))
            console.log(color.blueBright(`Presence Description : ${a2}`))
            console.log(color.blueBright(`Presence Party ID : ${a3}`))

            console.log('\n')
            console.log(color.redBright(`Image Settings`))
            console.log(color.blueBright(`Large Image Text : ${a4}`))
            console.log(color.blueBright(`Small Image Text : ${a5}`))
          })
        })
      })
    })
  })
}

// Function => Random Config
async function randomConfig() {
  // Defining randoms
  const states = [
    'Bear',
    'Gaming',
    'Eating',
    'Busy',
    'Minecraft',
    'Roblox',
    'Fortnite',
    'Call Of Duty',
    'Visual Studio Code',
    'NoxPlayer',
    'Raft',
    'GTA V',
  ]
  const details = [
    'dev Lil_Bear#1450',
    'Dm me for questions',
    'Im just chilling',
    'Bears are awesome animals',
    'playing some games',
    'I have a big raft',
    'Fortnite Battle Royale!',
    'Epic Gamer!'
  ]

  const rState   = states[Math.floor(Math.random()*states.length)]
  const rDetails = details[Math.floor(Math.random()*details.length)]

  // Updating values
  client.updatePresence({
    state: rState,
    details: rDetails,
    startTimestamp: new Date(),
    largeImageKey: 'drpc',
    largeImageText: `Discord Rich Presence v${version}`,
    smallImageKey: 'bear-logo',
    smallImageText: 'dev Lil_Bear#1450',
    partyId: 'bearys_party',
  })
    
  // Calling the banner function
  banner()

  // Console.logging the choice
  console.log(color.blueBright('Selected : Random config'))
  console.log('\n')

  // Console.logging the Details
  console.log(color.blueBright(`Presence Title : ${rDetails}`))
  console.log(color.blueBright(`Presence Description : ${rState}`))

  console.log('\n')
  console.log(color.redBright(`Image Settings`))
  console.log(color.blueBright(`Large Image Text : Discord Rich Presence v${version}`))
  console.log(color.blueBright(`Small Image Text : dev Lil_Bear#1450`))
}

async function banner() {
  await figlet('Discord RPC', { font: 'Lean' } , function(err, data) {
    console.clear()
    console.log(color.cyan(`┌──Discord RPC v${version}───────────────────────────────────────────────────────────────Connected──────────┐`))
    console.log(color.greenBright(data))
    console.log(color.cyan(`└────────────────────────────────────────────────────────────────────────────────── by Lil_Bear#1450 ──┘`)) 
    console.log('\n\n')
  })
}