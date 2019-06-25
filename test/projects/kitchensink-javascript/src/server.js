import ejs from 'ejs';
import path from 'path';
import express from 'express';

const app = express();

app.get('/other', async (req, res) => {
  res.send(await ejs.renderFile('./src/other.ejs'));
});

app.get('/web-worker.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'statics/worker.bundle.js'));
});

app.get('/web-worker-with-externals-bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'statics/worker-with-externals.bundle.js'));
});

app.get('/web-worker-with-externals.js', async (req, res) => {
  res.send(
    `self['worker-externals'] = 'Some external text';\n importScripts("/web-worker-with-externals-bundle.js")`,
  );
});

app.get('*', async (req, res) => {
  res.send(
    await ejs.renderFile('./src/index.ejs', {
      title: 'Some title',
    }),
  );
});

app.listen(process.env.PORT);
