// Output a prompt
process.stdout.write('prompt > ');

const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

// the stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    let cmd = data.toString().trim(); // remove the newline
    if(cmd === 'pwd'){
      pwd(done);
    } else if(cmd === 'ls'){
      ls(done);
    } else if(cmd.slice(0,3) === 'cat'){
      let entries = cmd.split(" ");
      cat(entries[1], done);
    }else if(cmd.slice(0,4) === 'curl'){
      let ents = cmd.split(" ");
      curl(ents[1], done);
    }else {
      // or process.stdout.write(process.cwd());
      process.stdout.write('You typed: ' + cmd);
      process.stdout.write('\nprompt > ');
    }
});

const done = (output) => {
  // show the output
  process.stdout.write(output);
  // show the prompt
  process.stdout.write("\nprompt > ");
}