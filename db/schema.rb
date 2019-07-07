# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_07_06_210227) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "artists", force: :cascade do |t|
    t.string "name"
    t.string "city"
    t.string "country"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "artworks", force: :cascade do |t|
    t.bigint "artist_id", null: false
    t.string "title"
    t.date "year"
    t.string "image"
    t.string "description"
    t.string "medium"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["artist_id"], name: "index_artworks_on_artist_id"
  end

  create_table "calls", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "medium"
    t.date "deadline"
    t.bigint "org_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["org_id"], name: "index_calls_on_org_id"
  end

  create_table "orgs", force: :cascade do |t|
    t.string "name"
    t.string "mission"
    t.string "url"
    t.string "street"
    t.string "city"
    t.integer "zip"
    t.string "country"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "submits", force: :cascade do |t|
    t.string "portfolio"
    t.bigint "artist_id", null: false
    t.bigint "call_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["artist_id"], name: "index_submits_on_artist_id"
    t.index ["call_id"], name: "index_submits_on_call_id"
  end

  add_foreign_key "artworks", "artists"
  add_foreign_key "calls", "orgs"
  add_foreign_key "submits", "artists"
  add_foreign_key "submits", "calls"
end
