
var cmds = require('./commands.js')

process.stdout.write('prompt > ')

process.stdin.on( 'data', function (data) {
  var input = data.toString().trim()

  let cmd = input.split(' ')[0];
  input = input.slice(cmd.length).trim();
  if ( cmds[cmd] ) cmds[cmd](input);
  else process.stdout.write( 'Sorry... don\'t know that one.' )
  // setTimeout(() => { process.stdout.write('\nprompt > ') }, 5)
})

