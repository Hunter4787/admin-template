import React, { Component } from 'react';
class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			wordCount: 0
		};
	}
	wordCount=()=>{
		this.setState({wordCount: this.state.wordCount + 1})
	}
	render() {
		return (
			<div>
				<form
					className="simple_form profile-information form-horizontal"
					id="edit_user_410936"
					noValidate="novalidate"
					encType="multipart/form-data"
					action="/fr/dashboard/profile"
					acceptCharset="UTF-8"
					method="post"
				>
					<h2>Informations personnelles</h2>
					<p className="text-muted">
						Ces informations sont confidentielles, elles ne sont pas publiées sur le site
					</p>
					<div className="form-group row">
						<div className="offset-3 col-lg-3">
							<label>Votre photo</label>
						</div>
						<div className="col-lg-3">
							<span className="b3-btn b3-btn-white fileupload">
								<input className="upload-avatar" type="file" name="user[avatar]" id="user_avatar" />
								<i className="budicon-upload bud-lg" />
								<span>Télécharger</span>
							</span>
						</div>
					</div>
					<div className="form-group">
						<div className="col-lg-3">
							<label>Votre pseudo</label>
							<i
								className="fa fa-exclamation-circle"
								data-placement="bottom"
								data-toggle="tooltip"
								title
								data-original-title="Votre pseudo ne peut pas être modifié, il est automatique"
							/>
						</div>
						<div className="col-lg-6">
							<input className="form-control" defaultValue="Moez H." />
						</div>
					</div>
					<div className="form-group">
						<div className="col-lg-3">
							<label>Votre mot de passe</label>
							<i
								className="fa fa-exclamation-circle"
								data-placement="bottom"
								data-toggle="tooltip"
								title
								data-original-title="Vous pouvez modifier Votre mot de passe"
							/>
						</div>
						<div className="col-lg-6">
							<input className="form-control" type="password" defaultValue="" />
						</div>
					</div>
					<hr />
					<div className="form-group">
						<div className="col-lg-3">
							<label>Vous êtes</label>
						</div>
						<div className="col-lg-9">
							<div className="row">
								<div className="col-lg-3">
									<input
										className="radio_buttons"
										id="user_civility_male"
										name="user[civility]"
										type="radio"
										defaultValue="male"
									/>
									<label htmlFor="user_civility_male">
										<span />
										Un homme
									</label>
								</div>
								<div className="col-lg-3">
									<input
										className="radio_buttons"
										id="user_civility_female"
										name="user[civility]"
										type="radio"
										defaultValue="female"
									/>
									<label htmlFor="user_civility_female">
										<span />
										Une femme
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="form-group">
						<div className="col-lg-3">
							<label>Votre nom complet</label>
							<i
								className="fa fa-exclamation-circle"
								data-placement="bottom"
								data-toggle="tooltip"
								title
								data-original-title="Pour une demande de changement de nom, adressez-vous à notre service client"
							/>
						</div>
						<div className="col-lg-6">
							<input className="form-control" disabled defaultValue="Moez Hilmi" />
						</div>
					</div>
					<div className="form-group">
						<div className="col-lg-3">
							<label>Votre date de naissance</label>
						</div>
						<div className="col-lg-6">
							<input
								required="required"
								className="string required form-control datepicker hasDatepicker"
								aria-required="true"
								type="date"
								name="user[birth_date]"
								id="user_birth_date"
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-lg-3">
							<label>Votre adresse</label>
						</div>
						<div className="col-lg-6">
							<input
								defaultValue={''}
								placeholder="Ex: 23 rue de Palestine, tunisie"
								className="form-control"
								type="text"
								name="user[main_address_attributes][street1]"
								id="user_main_address_attributes_street1"
							/>
						</div>
					</div>
					<input
						type="hidden"
						defaultValue={754138}
						name="user[main_address_attributes][id]"
						id="user_main_address_attributes_id"
					/>
					<div className="form-group">
						<div className="col-lg-6 col-lg-offset-3">
							<input
								type="button"
								name="commit"
								Value="Enregistrer"
								className="btn b3-btn b3-btn-blue"
								data-disable-with="Enregistrer"
							/>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default Profile;
