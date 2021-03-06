# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20131114165632) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "favorites", force: true do |t|
    t.integer "user_id"
    t.integer "location_id"
  end

  create_table "locations", force: true do |t|
    t.string   "name",               null: false
    t.decimal  "latitude",           null: false
    t.decimal  "longitude",          null: false
    t.integer  "msw_id",             null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "locations", ["msw_id"], name: "index_locations_on_msw_id", unique: true, using: :btree
  add_index "locations", ["name"], name: "index_locations_on_name", unique: true, using: :btree

  create_table "users", force: true do |t|
    t.text     "email",                           null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "password_digest",                 null: false
    t.boolean  "admin",           default: false, null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree

end
