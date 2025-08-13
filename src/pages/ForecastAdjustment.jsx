/*
 * Copyright (c) 2021-Present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Header, Icon, Table } from 'semantic-ui-react';
import '../ForecastAdjustment.css';

const ForecastAdjustment = () => {
    {/*
    const { authState, oktaAuth } = useOktaAuth();
    const [userInfo, setUserInfo] = useState(null);



    useEffect(() => {
        if (!authState || !authState.isAuthenticated) {
            // When user isn't authenticated, forget any user info
            setUserInfo(null);
        } else {
            setUserInfo(authState.idToken.claims);
            // get user information from `/userinfo` endpoint
            /*oktaAuth.getUser().then((info) => {
              setUserInfo(info);
            });
        }
    }, [authState, oktaAuth]); // Update if authState changes

    if (!userInfo) {
        return (
            <div>
                <p>Fetching user profile...</p>
            </div>
        );
    }
    */}

    //{/*
    const [fcdata, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const API_KEY ="b606eb0b74f8ed97c671b7dff93cf390da30375ee4aef6cf12c0f19a18f3fb4e";
    const BASE_URL = "https://apim.workato.com/playground/forecast-v1/certinia-dump/";
    useEffect(() => {
        const fetchData = async () => {
            const myHeadersGet = new Headers();
            myHeadersGet.append("API-TOKEN", API_KEY);

            const requestOptionsGet = {
                method: "GET",
                headers: myHeadersGet,
                redirect: "follow",
            };

            try {
                const response = await fetch(BASE_URL, requestOptionsGet);
                if (!response.ok) {
                    // The request succeeded but the server returned an error response (4xx, 5xx)
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();

                // API may return object, null, or array. Safeguard:
                const dataArray = Array.isArray(result?.data) ? result.data : [];
                const data = dataArray.map((item) => ({
                    ID: item.ID || "",
                    Region: item.Region || "",
                    EM: item.EM || "",
                    Project: item.Project || "",
                    link: item.link || "#",
                    ResourceName: item.ResourceName || "",
                    ForecastedHours: item.ForecastedHours || 0,
                    ProjectedHours: item.ProjectedHours || 0,
                    Comment: item.Comment || "",
                }));
                setData(data);
            } catch (err) {
                setError("Failed to load forecast data.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    console.log("fcdata: ",fcdata)
    //*/}
    const fdata =
         [
            {
                "EM": "Payton Pereira",
                "Project": "Talent International - FF Custom Data Migration - Jul 2025",
                "ResourceName": "Aman Singh",
                "ForecastedHours": 2.0,
                "ProjectedHours": 4.0,
                "Comment": "EM need to add hours",
                "ID": 1
            },
            {
                "EM": "Reema Raj",
                "Project": "Lounge Underwear Limited - FF Ultimate Onboarding - Mar 2025",
                "ResourceName": "Aman Singh",
                "ForecastedHours": 2.0,
                "ProjectedHours": 2.0,
                "Comment": "No Changes",
                "ID": 2
            }
        ]
    ;

    return (
        <div>
            <div className="app-logo">
                <img
                    src="https://v.fastcdn.co/u/573f0666/64658906-0-zd-primary-logo.svg"
                    alt="logo"
                />
            </div>
        <h1>Forecast Adjustment </h1>
        <table id="forecastTable" role="table" aria-label="Forecast data table">
            <thead>
            <tr>
                <th
                    className="resource-header"
                    scope="col"
                    aria-label="Resource Name Column with filter"
                >
                    <div className="filter">
                        <span>Resource Name</span>
                        <div className="filterWrapper" id="resourceFilterWrapper">
                            {/* Magnifying glass icon */}
                            <svg
                                className="filterIcon"
                                id="resourceFilterIcon"
                                fill="#ffff"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
                            </svg>
                            <input
                                type="text"
                                className="filterInput"
                                id="resourceFilterInput"
                                placeholder="Filter Resource..."
                                aria-label="Filter Resource Name Column"
                            />
                        </div>
                    </div>
                </th>
                <th className="em-header" scope="col" aria-label="EM Column with filter">
                    <div className="filter">
                        <span>EM</span>
                        <div className="filterWrapper" id="emFilterWrapper">
                            {/* Magnifying glass icon */}
                            <svg
                                className="filterIcon"
                                id="emFilterIcon"
                                fill="#ffff"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
                            </svg>
                            <input
                                type="text"
                                className="filterInput"
                                id="emFilterInput"
                                placeholder="Filter EM..."
                                aria-label="Filter EM Column"
                            />
                        </div>
                    </div>
                </th>
                <th className="project-header" scope="col">Project</th>
                <th className="forecast-header" scope="col">
                    Current <br />
                    Forecast <br />
                    (Hours)
                </th>
                <th className="projected-header" scope="col">
                    Proposed <br />
                    Forecast <br />
                    (Hours)
                </th>
                <th className="comment-header" scope="col">Comment</th>
            </tr>
            </thead>
            <tbody id="table-body" role="rowgroup">
            {/* Render data rows here using React! */}
            {fcdata.map((row, idx) => (
                <tr key={idx}>
                    <td>{row.ResourceName}</td>
                    <td>{row.EM}</td>
                    <td>{row.Project}</td>
                    <td>{row.ForecastedHours}</td>
                    <td>{row.ProjectedHours}</td>
                    <td>{row.Comment}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
};

export default ForecastAdjustment;
