const exec = require('child_process').exec
const free = exec('webpack --mode=production')

// node 进程后缀
console.log(process.argv)

/*
控制台之所以不能看到输出信息的原因是由于子进程有自己的stdio流（stdin、stdout、stderr），
控制台的输出是与当前进程的stdio绑定的，因此如果希望看到输出信息，可以通过在子进程的stdout 
与当前进程的stdout之间建立管道实现
*/
free.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

free.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

free.on('close', (code) => {
  console.log(`退出码 ${code}`);
});