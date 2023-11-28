<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->foreignId('writer')->references('id')->on('writers');
            $table->string('cim');
            $table->integer('kelt');
            $table->string('kiado');
            $table->timestamps();
        });

        DB::table('books')->insert([
            ['writer'=>1, 'cim'=>'Budapest','kelt'=>1932,'kiado'=>'Nemzeti kiadó'],
            ['writer'=>1, 'cim'=>'A jogász','kelt'=>1928,'kiado'=>'Szegedi kiadó'],
            ['writer'=>2, 'cim'=>'Hideg','kelt'=>1988,'kiado'=>'Kis kiadó']
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
