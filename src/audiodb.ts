/*
 * Copyright 2022 XXIV
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const BASE_URL = "https://theaudiodb.com/api/v1/json/2/";

export class AudioDBException extends Error {
  constructor(message: string) {
    super(message);
  }
}

/**
 *
 * @param  {string} s
 * @return Return Artist details from artist name
 * @throws AudioDBException on failure
 */
export async function searchArtist(s: string): Promise<any> {
  try {
    let req = await fetch(`${BASE_URL}search.php?s=${encodeURI(s)}`);
    let response = await req.text();
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.artists != null &&
        typeof data.artists !== "undefined" &&
        data.artists != ""
      ) {
        return data.artists[0];
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new AudioDBException(err);
  }
}

/**
 *
 * @param  {string} s
 * @return Return Discography for an Artist with Album names and year only
 * @throws AudioDBException on failure
 */
export async function discography(s: string): Promise<Array<any>> {
  try {
    let req = await fetch(`${BASE_URL}discography.php?s=${encodeURI(s)}`);
    let response = await req.text();
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.album != null &&
        typeof data.album !== "undefined" &&
        data.album != ""
      ) {
        return data.album;
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new AudioDBException(err);
  }
}

/**
 *
 * @param  {number} i
 * @return Return individual Artist details using known Artist ID
 * @throws AudioDBException on failure
 */
export async function searchArtistById(i: number): Promise<any> {
  try {
    let req = await fetch(`${BASE_URL}artist.php?i=${i}`);
    let response = await req.text();
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.artists != null &&
        typeof data.artists !== "undefined" &&
        data.artists != ""
      ) {
        return data.artists[0];
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new AudioDBException(err);
  }
}

/**
 *
 * @param  {number} i
 * @return Return individual Album info using known Album ID
 * @throws AudioDBException on failure
 */
export async function searchAlbumById(i: number): Promise<any> {
  try {
    let req = await fetch(`${BASE_URL}album.php?m=${i}`);
    let response = await req.text();
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.album != null &&
        typeof data.album !== "undefined" &&
        data.album != ""
      ) {
        return data.album[0];
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new AudioDBException(err);
  }
}

/**
 *
 * @param  {number} i
 * @return Return All Albums for an Artist using known Artist ID
 * @throws AudioDBException on failure
 */
export async function searchAlbumsByArtistId(i: number): Promise<Array<any>> {
  try {
    let req = await fetch(`${BASE_URL}album.php?i=${i}`);
    let response = await req.text();
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.album != null &&
        typeof data.album !== "undefined" &&
        data.album != ""
      ) {
        return data.album;
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new AudioDBException(err);
  }
}

/**
 *
 * @param  {number} i
 * @return Return All Tracks for Album from known Album ID
 * @throws AudioDBException on failure
 */
export async function searchTracksByAlbumId(i: number): Promise<Array<any>> {
  try {
    let req = await fetch(`${BASE_URL}track.php?m=${i}`);
    let response = await req.text();
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.track != null &&
        typeof data.track !== "undefined" &&
        data.track != ""
      ) {
        return data.track;
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new AudioDBException(err);
  }
}

/**
 *
 * @param  {number} i
 * @return Return individual track info using a known Track ID
 * @throws AudioDBException on failure
 */
export async function searchTrackById(i: number): Promise<any> {
  try {
    let req = await fetch(`${BASE_URL}track.php?h=${i}`);
    let response = await req.text();
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.track != null &&
        typeof data.track !== "undefined" &&
        data.track != ""
      ) {
        return data.track[0];
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new AudioDBException(err);
  }
}

/**
 *
 * @param  {number} i
 * @return Return all the Music videos for a known Artist ID
 * @throws AudioDBException on failure
 */
export async function searchMusicVideosByArtistId(i: number): Promise<Array<any>> {
  try {
    let req = await fetch(`${BASE_URL}mvid.php?i=${i}`);
    let response = await req.text();
    if (response != null && typeof response !== "undefined" && response != "") {
      let data = JSON.parse(response);
      if (
        data.mvids != null &&
        typeof data.mvids !== "undefined" &&
        data.mvids != ""
      ) {
        return data.mvids;
      } else {
        throw "no results found";
      }
    } else {
      throw "no results found";
    }
  } catch(err) {
    throw new AudioDBException(err);
  }
}