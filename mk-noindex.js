let fs=require("fs")

let files=fs.readdirSync("public/minekhan/history/")
for(let f of files){
	if(!f.endsWith(".html"))continue
	let t=fs.readFileSync("public/minekhan/history/"+f,"utf-8")
	if(!t.includes('<meta name="robots" content="noindex">')){
		t=t.replace(/\<title.*\>|\<pre.*\>|\<h1.*\>/,'<meta name="robots" content="noindex">\n$&')
	}
	fs.writeFileSync("public/minekhan/history/"+f,t)
}
