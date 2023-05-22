const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const fs =  require('fs');

app.use(express.static('app'));

app.all('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'app', 'index.html'));
});
app.all('/api/:name', (req, res) => {
  const { name } = req.params;
  const filePath = `./api/${name}.js`;

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.status(404).send({ success: false, error: "Route not found"});
    } else {
      const module = require(filePath);
      if (typeof module.callback === 'function') {
        return module.callback(req, res);
      } else {
        res.status(500).send('Invalid module in route ' + name);
      }
    }
  });
});
app.use((req, res, next) => {
  res.status(404).send('Redirecting ...<script>location.href = "/#/404"</script>');
});



app.listen(port, () => {
  console.log(`[SUCCESS] Server listening on port ${port}`);
});
