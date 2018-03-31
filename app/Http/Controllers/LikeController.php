<?php

namespace App\Http\Controllers;

use App\Model\Like;
use App\Model\Reply;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('JWT');
    }

    public function likeIt(Reply $reply)
    {
      $reply->like()->create([
        'user_id' => auth()->id,
      ]);

      broadcast(new LikeEvent($reply->id, 1))->toothers();
    }

    public function unLikeIt(Reply $reply)
    {
      $reply->like()->where('user_id', auth()->id())->first()->delete();
      broadcast(new LikeEvent($reply->id, 0))->toothers();
    }
}
