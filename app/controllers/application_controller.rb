class ApplicationController < ActionController::Base
  before_action :redirect_if_old_domain

  protected

  def redirect_if_old_domain
    if request.host.ends_with?("feedadoc.com")
      redirect_to "https://hospitalhero.care#{request.fullpath}", :status => :moved_permanently
    end
  end
end
