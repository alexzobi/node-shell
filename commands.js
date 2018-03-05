var fs = require('fs')

exports.pwd = function() {
  process.stdout.write( process.argv[1] )
  process.stdout.write('\nprompt > ')
 }
exports.date = function() {
  process.stdout.write( new Date().toLocaleString() )
  process.stdout.write('\nprompt > ')
}
exports.ls = function() {
  fs.readdir('.', function(err, files) {
    if (err) throw err
    files.forEach(function(file) {
      process.stdout.write(file.toString() + "\n")
    })
    process.stdout.write('\nprompt > ')
  })
}
exports.echo = function(str){
  if (str[0] === "$"){
    process.stdout.write(`${str}`);

  } else {
    process.stdout.write(str.trim());
  }
  process.stdout.write('\nprompt > ')

}
exports.cat = function(fileName){
  fs.readFile(fileName, 'utf8', function(err, data){
    if (err) throw err;
    process.stdout.write('\n' +data);
  })
  setTimeout(function(){process.stdout.write('\nprompt > ')},50)

}

exports.head = function(fileName){
  fs.readFile(fileName, 'utf8', function(err, data){
    if (err) throw err;
    let head = data.split('\n').slice(0,4).join("\n");
    process.stdout.write('\n' + head);
  })
  setTimeout(function(){process.stdout.write('\nprompt > ')},50)

}

exports.tail = function(fileName){
  fs.readFile(fileName, 'utf8', function(err, data){
    if (err) throw err;
    let tail = data.split('\n');
    tail = tail.slice(tail.length-5).join("\n");
    process.stdout.write('\n' + tail);
  })
  setTimeout(function(){process.stdout.write('\nprompt > ')},50)

}


// process.stdout.write( 'Sorry... don\'t know that one.' )
