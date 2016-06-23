/* eslint-disable new-cap */

import express from 'express';
import Game from '../models/games';
const router = module.exports = express.Router();

router.post('/new', (req, res) => {
  const game = new Game(req.body);
  game.save(() => {
    res.send(game);
  });
});

router.put('/:id/flip', (req, res) => {
  Game.findById(req.params.id, (err, game) => {
    const o = {};
    const fr = req.body.flipResult * 1;
    if (fr === 1) {
      o.heads = game.heads;
      o.heads++;
    } else {
      o.tails = game.tails;
      o.tails++;
    }
    game.update(o, () => {
      Game.findById(req.params.id, (e, game1) => {
        res.send(game1);
      });
    });
  });
});
