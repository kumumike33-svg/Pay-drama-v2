// PAYDRAMA V2
// Supabase connection
const SUPABASE_URL = "https://vxshaqbnqewtlssybwvb.supabase.co";
const SUPABASE_KEY = "sb_publishable_w3WVf8Jaodb87rso8XoO6w_8ZowgGCu";

let supabaseClient = null;
let dramas = [];
let selectedGenre = "All";

const sampleDramas = [
  {id:1,title:"The Last Promise",genre:"Romance",description:"A promise from the past changes two lives forever.",episodes_count:24},
  {id:2,title:"Queen of Revenge",genre:"Revenge",description:"Betrayed by everyone, she returns to take back her life.",episodes_count:30},
  {id:3,title:"Midnight Secrets",genre:"Thriller",description:"One mysterious night reveals a dangerous secret.",episodes_count:18},
  {id:4,title:"The Billionaire's Bride",genre:"Romance",description:"A marriage agreement becomes something unexpected.",episodes_count:26},
  {id:5,title:"Bloodline",genre:"Thriller",description:"A family legacy hides a shocking truth.",episodes_count:20},
  {id:6,title:"Moonborn",genre:"Fantasy",description:"A mysterious power changes her destiny.",episodes_count:22},
  {id:7,title:"One More Chance",genre:"Romance",description:"Two former lovers meet again.",episodes_count:16},
  {id:8,title:"The Hidden Heir",genre:"Revenge",description:"A forgotten heir returns to claim a powerful legacy.",episodes_count:28}
];

const $ = selector => document.querySelector(selector);

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;",
