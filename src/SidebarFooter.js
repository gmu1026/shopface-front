import React from 'react';
import { Link } from 'react-router-dom';
const SidebarFooter = () => {
  return (
    <footer class="footer">
      <div class="container-fluid">
        <div class="row text-muted">
          <div class="col-6 text-left">
            <ul class="list-inline">
              <li class="list-inline-item">
                <Link to="/">Support</Link>
              </li>
              <li class="list-inline-item">
                <Link to="/">Help center</Link>
              </li>
              <li class="list-inline-item">
                <Link to="/">privacy</Link>
              </li>
              <li class="list-inline-item">
                <Link to="/">Terms of Service</Link>
              </li>
            </ul>
          </div>
          <div class="col-6 text-right">
            <p class="mb-0">
              © 2020 - <Link to="/">Shopface</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default SidebarFooter;
