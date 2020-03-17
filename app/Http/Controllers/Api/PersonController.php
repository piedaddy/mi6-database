<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Person;
use Croppa;
//croppa is from global namespace


class PersonController extends Controller
{
    public function index() 
    {
        $people = Person::with('image') //now i get data from the images table 
                       ->offset(10)
                        ->orderBy('name', 'asc')
                        ->limit(20)
                        ->get();
            foreach($people as $person) {
                $person->image_url = Croppa::url('images/'.$person->image->path, 100, null, ['resize']);
                //                                                                  null leaves height automatic
                //adding  new propery (IMAGE_URL) to each person, only bc we are outputting them using react, which couldnt generate a proper url on its own???
                //it is a url that croppa can use to generate proper thumbnail
            }
        return $people;
    }
}
