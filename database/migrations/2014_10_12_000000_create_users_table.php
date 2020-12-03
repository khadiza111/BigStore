<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('mobile');
            $table->mediumText('address')->nullable();
            $table->string('date')->nullable();
            $table->integer('refNo')->unique()->nullable();
            $table->string('vdate')->nullable();
            $table->integer('vrefNo')->unique()->nullable();
            $table->string('password');
            $table->string('type')->default('admin');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('photo')->default('profile.png');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
