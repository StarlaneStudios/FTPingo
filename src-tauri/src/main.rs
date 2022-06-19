#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use rusqlite::{Connection, Result};
use std::{fs, path::Path, process};
use tauri::{command, generate_context, Builder};

#[command]
fn connect_ftp_server(_host: String, _user: String, _password: String, _protocol: String) {

    // Connect to the database
    let db = Connection::open("db.sqlite").unwrap();


}

#[command]
fn ftp_connections_list (_host: String, _user: String, _password: String) {

    // Connect to the database
    let db = Connection::open("db.sqlite").unwrap();

    // Get the list of FTP connections
    let mut stmt = db.prepare("SELECT * FROM ftp_connections").unwrap();
}

fn main() -> Result<()> {
    // tries to open the database to check if it exists later
    let path_setup = Path::new("setup.sqlite");
    let path_database = Path::new("database.sqlite");

    // if the path of the setup does not exists
    if !path_setup.exists() && !path_database.exists() {
        println!("setup.sqlite not found");
        process::exit(1);
    }

    if !path_database.exists() && path_setup.exists() {
        let conn = Connection::open(path_database)?;
        // read the contents from the setup file
        let setup_file = fs::read_to_string(path_setup).unwrap();

        // execute the setup file to create the tables in the database
        // with the already defined connection
        conn.execute_batch(setup_file.as_str())?;

        // close connection to database to prevent errors
        conn.close().unwrap();
    }

    Builder::default()
        .invoke_handler(generate_handler![connect_ftp_server])
        .run(generate_context!())
        .expect("error while running tauri application");

    Ok(())
}
