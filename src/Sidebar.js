import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <div className="wrapper">
        <nav id="sidebar" className="sidebar">
          <div className="sidebar-content">
            <a className="sidebar-brand" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-box align-middle"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
              <span className="align-middle">ShopFace</span>
            </a>

            <div className="form-row">
              <div className="form-group col-md-8">
                <div id="selectBranchDiv" className="from-c"></div>
              </div>
            </div>

            <ul className="sidebar-nav">
              <li className="sidebar-header">Pages</li>
              <li className="sidebar-item">
                <a
                  href="/member"
                  data-toggle="collapse"
                  className="sidebar-link collapsed"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-sliders align-middle"
                  >
                    <line x1="4" y1="21" x2="4" y2="14"></line>
                    <line x1="4" y1="10" x2="4" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12" y2="3"></line>
                    <line x1="20" y1="21" x2="20" y2="16"></line>
                    <line x1="20" y1="12" x2="20" y2="3"></line>
                    <line x1="1" y1="14" x2="7" y2="14"></line>
                    <line x1="9" y1="8" x2="15" y2="8"></line>
                    <line x1="17" y1="16" x2="23" y2="16"></line>
                  </svg>
                  <span className="align-middle">회원 관리</span>
                </a>
                <ul
                  id="dashboards"
                  className="sidebar-dropdown list-unstyled collapse"
                  data-parent="#sidebar"
                >
                  <li className="sidebar-item">
                    <Link to="/member">회원 목록</Link>
                    {/* <a className="sidebar-link" href="/member">
                      회원목록
                    </a> */}
                  </li>
                </ul>
              </li>

              <li className="sidebar-item">
                <a
                  href="/timetable"
                  data-toggle="collapse"
                  className="sidebar-link collapsed"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-layout align-middle"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                  <span className="align-middle">시간표 관리</span>
                </a>
                <ul
                  id="pages"
                  className="sidebar-dropdown list-unstyled collapse"
                  data-parent="#sidebar"
                >
                  <li className="sidebar-item">
                    {/* <a className="sidebar-link" href="/timetable">
                      전체 시간표
                    </a> */}
                    <Link to="/timetble">시간표</Link>
                  </li>
                </ul>
              </li>

              <li className="sidebar-item">
                <a
                  href="/schedule"
                  data-toggle="collapse"
                  class="sidebar-link collapsed"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-users align-middle"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <span className="align-middle">스케줄 관리</span>
                </a>
                <ul
                  id="auth"
                  className="sidebar-dropdown list-unstyled collapse"
                  data-parent="#sidebar"
                >
                  <li className="sidebar-item">
                    {/* <a className="sidebar-link" href="/schedule">
                      나의 스케줄 관리
                    </a> */}
                    <Link to="/schedule">스케줄</Link>
                  </li>
                </ul>
              </li>

              <li className="sidebar-item">
                <a
                  href="/record"
                  data-toggle="collapse"
                  class="sidebar-link collapsed"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-book-open align-middle"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                  <span className="align-middle">근태 관리</span>
                </a>
                <ul
                  id="documentation"
                  className="sidebar-dropdown list-unstyled collapse"
                  data-parent="#sidebar"
                >
                  <li className="sidebar-item">
                    {/* <a className="sidebar-link">근무 기록</a> */}
                    <Link to="/record">근무 기록</Link>
                  </li>
                </ul>
              </li>

              <li className="sidebar-item">
                <a
                  href="#ui"
                  data-toggle="collapse"
                  className="sidebar-link collapsed"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-grid align-middle"
                  >
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                  <span className="align-middle">회사 관리</span>
                </a>
                <ul
                  id="ui"
                  className="sidebar-dropdown list-unstyled collapse"
                  data-parent="#sidebar"
                >
                  <li className="sidebar-item">
                    {/* <a className="sidebar-link" href="/branch">
                      사업장 관리
                    </a> */}
                    <Link to="/branch">사업장 관리</Link>
                  </li>
                  <li className="sidebar-item">
                    {/* <a className="sidebar-link">업무 관리</a> */}
                    <Link to="/occupation">업무 관리</Link>
                  </li>
                  <li className="sidebar-item">
                    {/* <a className="sidebar-link">근무자 관리</a> */}
                    <Link to="/member">근무자 관리</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Sidebar;
