#!/usr/bin/env node

require('./quotes')(function (gen) {
  console.log(gen());
});
